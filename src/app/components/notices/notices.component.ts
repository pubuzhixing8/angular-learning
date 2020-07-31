import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
  selector: 'nl-notices',
  template: `<p>notices works!</p>
  <div *ngFor='let notice of noticesService.notices'>
      <div>
          <span class='notice_event_id'>{{notice.event_id}}</span>
          <span class='notice_event_key'>{{notice.event_key}}</span>
          <span class='notice_desc'>{{ notice.event_desc }}</span>
      </div>
  </div>`,
})
export class NoticesComponent implements OnInit {
  // 构造器注入
  constructor(public noticesService: NoticesService) {}

  @Output()
  read: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.noticesService.fakeFetchNotices();
  }

  clickHandle(notice) {
    this.read.emit(notice.event_id);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nl-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'angular';

  constructor() { }

  ngOnInit() {
  }

}

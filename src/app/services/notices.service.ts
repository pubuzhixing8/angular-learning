import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  notices = [];

  constructor(private http: HttpClient) {}

  fakeFetchNotices() {
    this.notices = [
      {
        _id: '5f005b1bca7cc83100b9d3c1',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1593858843,
        application: 70,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'cancel_assigned_work_item',
        event_key: 'story',
        event_desc: '取消分配了用户故事',
        object: {
          _id: '5e6b1dfcf6b96d5e9a6adc57',
          type: 'story',
          name: '一二一',
          identifier: 'SPRELE-48',
          icon: 'user-story-square-fill',
          color: '#30d1fc',
        },
        pilot: { _id: '5e61ba6144428c0072f74329', name: 'Sprint 17 Demo' },
      },
      {
        _id: '5ef3040b9b87fa5546b75c9d',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1592984587,
        application: 110,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'joined_space_member',
        event_key: 'joined_space_member',
        event_desc: '把你加入了知识库',
        object: {
          _id: '5e68881dbf9394698323658a',
          type: 'space',
          name: '一一一',
          identifier: 'YYY',
          icon: 'book',
          color: '#56ABFB',
        },
        pilot: { _id: '5e68881dbf9394698323658a', name: '一一一' },
      },
      {
        _id: '5ef304039b87fa10d8b75c9c',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1592984579,
        application: 110,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'removed_space_member',
        event_key: 'removed_space_member',
        event_desc: '把你移出了知识库',
        object: {
          _id: '5e68881dbf9394698323658a',
          type: 'space',
          name: '一一一',
          identifier: 'YYY',
          icon: 'book',
          color: '#56ABFB',
        },
        pilot: { _id: '5e68881dbf9394698323658a', name: '一一一' },
      },
      {
        _id: '5ef303f29b87fa9b66b75c9a',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1592984562,
        application: 110,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'joined_space_member',
        event_key: 'joined_space_member',
        event_desc: '把你加入了知识库',
        object: {
          _id: '5e68881dbf9394698323658a',
          type: 'space',
          name: '一一一',
          identifier: 'YYY',
          icon: 'book',
          color: '#56ABFB',
        },
        pilot: { _id: '5e68881dbf9394698323658a', name: '一一一' },
      },
      {
        _id: '5ef303a89b87fa4b9ab75c99',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1592984488,
        application: 110,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'removed_space_member',
        event_key: 'removed_space_member',
        event_desc: '把你移出了知识库',
        object: {
          _id: '5e68881dbf9394698323658a',
          type: 'space',
          name: '一一一',
          identifier: 'YYY',
          icon: 'book',
          color: '#56ABFB',
        },
        pilot: { _id: '5e68881dbf9394698323658a', name: '一一一' },
      },
      {
        _id: '5eee0bcf9b87fae997b75c51',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1592658895,
        application: 70,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'removed_project_member',
        event_key: 'removed_project_member',
        event_desc: '把你移出了项目',
        object: {
          _id: '5eeb8cb8e512c288a9227c4b',
          type: 'project',
          name: 'sprint-19',
          identifier: 'SPRJJ',
          icon: 'scrum-fill',
          color: '#56ABFB',
        },
        pilot: { _id: '5eeb8cb8e512c288a9227c4b', name: 'sprint-19' },
      },
      {
        _id: '5eee09ac9b87fad29eb75c49',
        team: '5db7a0ed77c86b2d749605ad',
        uid: '542bfcb7e92d423a8063e75cec8386d1',
        timestamp: 1592658348,
        application: 70,
        is_read: 1,
        is_pending: 0,
        from: '52b9af20da8a4969aab88092d1fa64ce',
        event_id: 'joined_project_member',
        event_key: 'joined_project_member',
        event_desc: '把你加入了项目',
        object: {
          _id: '5eeb8cb8e512c288a9227c4b',
          type: 'project',
          name: 'sprint-19',
          identifier: 'SPRJJ',
          icon: 'scrum-fill',
          color: '#56ABFB',
        },
        pilot: { _id: '5eeb8cb8e512c288a9227c4b', name: 'sprint-19' },
      },
    ];
  }

  fetchNotices() {
    this.http.get('/api/typhon/broadcast/notices/has-unread').subscribe((result) => {
      console.log(result);
    });
  }
}

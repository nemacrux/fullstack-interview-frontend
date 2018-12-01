import { Component, OnInit } from '@angular/core';

import { TopicsService } from './topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.topicsService
      .getTopics()
      .subscribe(
        (data) => console.log('topics:', data),
        (error) => console.log('Error:', error)
      );
  }
}

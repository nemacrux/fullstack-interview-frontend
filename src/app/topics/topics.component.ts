import { Component, OnInit } from '@angular/core';

import { TopicsService } from './topics.service';
import { Observable } from 'rxjs';
import { Topic } from './topic.model';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  topics: Observable<Topic[]>;

  constructor(
    private dialog: MatDialog,
    private topicsService: TopicsService
  ) {}

  ngOnInit() {
    this.loadTopics();
  }

  loadTopics(): void {
    this.topics = this.topicsService.getTopicList();
  }

  delete(topic: any): void {
    console.log('delete', topic);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        name: '',
        message: `Are you sure you want to delete the topic '${topic.name}'?`
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result: ', result);
      if (result) {
        this.topicsService.deleteTopic(topic).subscribe((x) => {
          console.log(`topic deleted ${topic}`);
          this.loadTopics();
        });
      } else {
        console.log('not deleted');
      }
    });
  }
}

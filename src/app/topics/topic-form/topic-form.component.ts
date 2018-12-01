import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {
  form: Form;
  name = 'form-topic-test';
  description = 'form-topic-test-desc';

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {}

  submit() {
    // TODO: if this for is valid
    this.topicsService
      .createTopic({
        name: this.name,
        description: this.description
      })
      .subscribe((topic) => console.log('created:', topic));
  }
}

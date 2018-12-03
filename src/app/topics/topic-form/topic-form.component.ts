import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { TopicsService } from '../topics.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Topic } from '../topic.model';
import { TopicDto } from '../topic.dto';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {
  form: Form;
  name = '';
  description = '';
  action = '';
  id: number;

  constructor(
    private topicsService: TopicsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['/topics']);
  }

  ngOnInit() {
    this.route.url.subscribe((url: any) => {
      this.action = url.length > 1 ? url[1].path : 'add';
    });
    this.route.params.subscribe((params: { id: string }) => {
      this.id = Number(params.id);
      if (this.id) {
        this.loadTopic();
      }
    });
  }

  loadTopic(): void {
    this.topicsService.getTopic(this.id).subscribe((topic: Topic) => {
      this.name = topic.getName();
      this.description = topic.getDescription();
    });
  }

  submit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      const data: TopicDto = {
        name: form.value.name,
        description: form.value.description
      };

      if (this.action === 'add') {
        this.topicsService.createTopic(data).subscribe((topic) => {
          console.log('created:', topic);
        });
      } else {
        this.topicsService.updateTopic(this.id, data).subscribe((topic) => {
          console.log('updated:', topic);
        });
      }
      this.goBack();
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from './topic.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TopicDto } from './topic.dto';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  public readonly host: string = 'http://localhost:3000';
  public readonly topicsEndpoint: string = 'api/v1/topics';

  constructor(private httpClient: HttpClient) {}

  createTopic(topic: TopicDto): Observable<any> {
    return this.httpClient.post(`${this.host}/${this.topicsEndpoint}`, {
      name: topic.name,
      description: topic.description
    });
  }

  deleteTopic(topic: Topic): Observable<any> {
    return this.httpClient.delete(
      `${this.host}/${this.topicsEndpoint}/${topic.getId()}`
    );
  }

  getTopic(id: number): Observable<Topic> {
    return this.httpClient
      .get(`${this.host}/${this.topicsEndpoint}/${id}`)
      .pipe(map(Topic.fromJson));
  }

  getTopicList(): Observable<Topic[]> {
    return this.httpClient.get(`${this.host}/${this.topicsEndpoint}`).pipe(
      map(Topic.fromJsonArray),
      tap(console.log)
    );
  }

  updateTopic(id: number, topic: TopicDto): Observable<any> {
    return this.httpClient.put(`${this.host}/${this.topicsEndpoint}/${id}`, {
      name: topic.name,
      description: topic.description
    });
  }
}

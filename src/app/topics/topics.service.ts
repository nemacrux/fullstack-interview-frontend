import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from './topic.model';
import { Observable } from 'rxjs';
import { TopicDto } from './topic.dto';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  public readonly host: string = 'http://localhost:3000';
  public readonly topicsEndpoint: string = 'api/v1/topics';

  constructor(private httpClient: HttpClient) {}

  createTopic(topic: TopicDto): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.httpClient.post(
      `${this.host}/${this.topicsEndpoint}`,
      // 'http://localhost:3000/api/v1/topics',
      {
        name: topic.name,
        description: topic.description
      },
      requestOptions
    );
  }

  getTopics(): Observable<any> {
    return this.httpClient.get(`${this.host}/${this.topicsEndpoint}`);
  }
}

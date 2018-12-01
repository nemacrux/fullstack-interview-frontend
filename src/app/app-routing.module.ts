import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { TopicFormComponent } from './topics/topic-form/topic-form.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'topics',
        children: [
          { path: '', component: TopicsComponent },
          { path: 'add', component: TopicFormComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

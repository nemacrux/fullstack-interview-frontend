import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    routes: any[] = [
        {
            title: 'Home',
            route: '/',
            icon: 'dashboard'
        },
        {
            title: 'Topics',
            route: '/topics',
            icon: 'view_comfy'
        },
        {
            title: 'Questions',
            route: '/',
            icon: 'question_answer'
        },
    ];

    constructor() { }

    ngOnInit() {
    }

}

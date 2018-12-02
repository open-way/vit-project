import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';

@Component({
    selector: 'vit-posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
    public postsss: Post = {
        userId: 0,
        body: 'This body',
        title: '',
        id: 0
    };

    constructor() { }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {

    }

    public load() {

        // this.postsss = {
        //     userId: 0,
        //     body: 'This body',
        //     title: '',
        //     id: 0
        // }
    }

    public onEdit(post: Post) {
        console.log(post);

        this.postsss.id = post.id;
        this.postsss.body = post.body;
        this.postsss.title = post.title;
        this.postsss.userId = post.userId;

        // console.log('Estamos en el component papá', post);
    }
}
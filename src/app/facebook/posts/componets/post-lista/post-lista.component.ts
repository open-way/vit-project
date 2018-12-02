import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../shared/posts.service';
import { flatMap } from 'rxjs/operators';

@Component({
    selector: 'vit-post-lista',
    templateUrl: 'post-lista.component.html'
})

export class PostListaComponent implements OnInit {

    public posts: Post[];

    @Output()
    public onEditPost = new EventEmitter<Post>();

    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
        this.loadPosts()
    }

    private loadPosts() {
        this.postsService.getAll()
            .subscribe(posts => {
                this.posts = posts;
            });
    }

    public onEdit(post: Post) {
        // console.log('Estamos en el component hijo', post);
        this.onEditPost.emit(post)
    }

    public onDeletet(postId: number) {
        this.postsService.delete(postId).subscribe(response => {
            console.log(response);
        });
        // this.loadPosts()
    }
}
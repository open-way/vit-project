import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../shared/posts.service';

@Component({
    selector: 'vit-post-form-new',
    templateUrl: 'post-form-new.component.html',
    styleUrls: ['post-form-new.component.scss'],
})

export class PostFormNewComponent implements OnInit {
    @Input()
    public post: Post;

    // public inputDataPost: Post;


    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        // this.post = this.inputDataPost;
    }

    public onSave() {
        if (this.post.id) {
            this.postsService.update(this.post.id, this.post)
                .subscribe(post => {
                    console.log(post);
                });
        } else {
            this.postsService.add(this.post).subscribe(post => {
                console.log(post);
            });
        }
        this.cleanForm();
    }

    private cleanForm() {
        this.post = {
            userId: 0,
            body: 'This body',
            title: '',
            id: 0
        }
    }
}
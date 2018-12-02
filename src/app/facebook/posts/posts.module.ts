import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListaComponent } from './componets/post-lista/post-lista.component';
import { CommonModule } from '@angular/common';
import { PostsService } from './shared/posts.service';
import { PostFormNewComponent } from './componets/post-form-new/post-form-new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    imports: [
        PostsRoutingModule,
        CommonModule,

        FormsModule,
        HttpClientModule,
    ],
    exports: [],
    declarations: [
        PostsComponent,
        PostListaComponent,
        PostFormNewComponent,
    ],
    providers: [
        PostsService,
    ],
})
export class PostsModule { }

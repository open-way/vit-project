import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

/**
 * http://localhost:4500/facebook/posts/
 */
const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class PostsRoutingModule { }
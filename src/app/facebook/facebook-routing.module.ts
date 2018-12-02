import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook.component';

/**
 * http://localhost:4500/facebook/
 * http://localhost:4500/facebook/posts
 * http://localhost:4500/facebook/albums
 * http://localhost:4500/facebook/photos
 */
const routes: Routes = [
    {
        path: '',
        component: FacebookComponent,
        children: [
            {
                path: 'posts',
                loadChildren: './posts/posts.module#PostsModule',
            },
            {
                path: 'albums',
                loadChildren: './albums/albums.module#AlbumsModule',
            },
            {
                path: 'photos',
                loadChildren: ''
            },
            // {
            //     path: '**',
            //     component: NotFoundPageComponent,
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacebookRoutingModule { }
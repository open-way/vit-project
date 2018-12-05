import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { FormAlbumComponent, FormAlbumEditComponent } from './components';

const routes: Routes = [
  {
    path: 'nuevo',
    component: FormAlbumComponent,
  },
  {
    path: ':id',
    component: FormAlbumEditComponent,
  },
  {
    path: '',
    component: AlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }

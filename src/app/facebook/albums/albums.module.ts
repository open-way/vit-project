import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import {
  ListAlbumsComponent,
  FormAlbumComponent,
} from './components';
import { AlbumsService } from './shared/albums.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlbumsComponent,
    FormAlbumComponent,
    ListAlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,

    ReactiveFormsModule,
  ],
  providers: [
    AlbumsService,
  ]
})
export class AlbumsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import {
  ListAlbumsComponent,
  FormAlbumComponent,
  FormAlbumEditComponent,
} from './components';
import { AlbumsService } from './shared/albums.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidatorsService } from './shared/custom-validators.service';

@NgModule({
  declarations: [
    AlbumsComponent,
    FormAlbumComponent,
    FormAlbumEditComponent,
    ListAlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,

    ReactiveFormsModule,
  ],
  providers: [
    AlbumsService,

    CustomValidatorsService,
  ]
})
export class AlbumsModule { }

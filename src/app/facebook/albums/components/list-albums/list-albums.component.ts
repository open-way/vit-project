import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../shared/albums.service';
import { Album } from '../../models/album';

@Component({
  selector: 'vit-list-albums',
  templateUrl: './list-albums.component.html',
  styles: []
})
export class ListAlbumsComponent implements OnInit {
  public albums: Album[];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {

    this.getAlbums();
  }

  private getAlbums() {
    this.albumsService.getAll$().subscribe(response => {
      console.log(response);
      this.albums = response;
    });
  }

}

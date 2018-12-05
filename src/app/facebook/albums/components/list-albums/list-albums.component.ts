import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../shared/albums.service';
import { Album } from '../../models/album';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vit-list-albums',
  templateUrl: './list-albums.component.html',
  styles: []
})
export class ListAlbumsComponent implements OnInit {
  public albums: Album[];

  constructor(
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.getAlbums();
  }

  private getAlbums() {
    this.albumsService.getAll$().subscribe(response => {
      console.log(response);
      this.albums = response;
    });
  }

  public onEdit(id) {
    this.router.navigate(['./', id], { relativeTo: this.activatedRoute })

  }

  public onDelete(id) {
    this.albumsService.delete$(id)
      .subscribe(response => {
        console.log('El album fue eliminado');
      });
  }


}

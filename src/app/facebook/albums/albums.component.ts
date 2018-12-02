import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vit-albums',
  template: `
    <button class="btn btn-success" routerLink="./nuevo">Nuevo</button>
    <vit-list-albums></vit-list-albums>
  `,
  styles: []
})
export class AlbumsComponent implements OnInit {
  public rutaNew = './nuevo';
  constructor() { }

  ngOnInit() {
  }

}

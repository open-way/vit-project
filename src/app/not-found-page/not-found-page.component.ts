import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'erp-not-found-page',
    template: `
    <div class="alert alert-danger">
      Pagina no encontrada.
    </div>
  `,
    styles: []
})
export class NotFoundPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
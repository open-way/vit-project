import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'erp-footer',
    template: `
  <footer class="blockquote-footer text-center">
      <a href="http://slides.com/vitmaraliaga">Clases</a> Desarrollado por <a href="https://twitter.com/Aliaga0911">Vitmar Aliaga</a>
  </footer>
  `,
    styles: [
        `
    :host{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3rem;
    }
    `
    ]
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
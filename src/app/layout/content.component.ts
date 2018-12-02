import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'erp-content',
    template: `
  <div class="container main"> 
    <router-outlet></router-outlet>
  </div>
  `,
    styles: [
        `
    .main {
      padding-top: 1rem;
    }
    `
    ]
})
export class ContentComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
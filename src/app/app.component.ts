import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'vit-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'vit-project';
  constructor(private titleApp: Title) {
    this.titleApp.setTitle('Applicación Vitmar')
  }
}

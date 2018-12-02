import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'vit-form-album',
  templateUrl: './form-album.component.html',
  styles: [`
  select.ng-invalid, input.ng-invalid{
    border-right: 8px solid red;
  }
  `]
})
export class FormAlbumComponent implements OnInit {
  // public userId = new FormControl('1');
  // public title = new FormControl('Mis fotos de graduación', [
  //   Validators.required,
  //   Validators.maxLength(10),
  //   Validators.minLength(5),
  // ]);

  public albumForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildAlbumForm();

  }

  private buildAlbumForm() {
    const controls = this.initializeControls();
    this.albumForm = this.formBuilder.group(controls);
  }

  private initializeControls() {
    return {
      userId: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5),]],
    }
  }

  public onSubmitAlbum() {
    const value = this.albumForm.value;
    console.log(value);
    
  }
}

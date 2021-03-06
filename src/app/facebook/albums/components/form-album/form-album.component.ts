import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidatorsService } from '../../shared/custom-validators.service';
import { AlbumsService } from '../../shared/albums.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private customValidatorsService: CustomValidatorsService,
    private albumsService: AlbumsService,
  ) { }

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
      title: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]],
      // numero: [0, [Validators.required, this.customValidatorsService.onlyNumber, this.customValidatorsService.onlyNumberPositive]],
    }
  }

  public onSubmitAlbum() {
    const value = this.albumForm.value;

    const data: any = {
      user_id: value.userId,
      titulo: value.title,
    }

    // STEP 01
    this.albumsService.save$(data)
      .subscribe(album => {

      });


  }
}

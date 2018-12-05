import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidatorsService } from '../../shared/custom-validators.service';
import { AlbumsService } from '../../shared/albums.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vit-form-album-edit',
  templateUrl: './form-album-edit.component.html',
  styles: [`
  select.ng-invalid, input.ng-invalid{
    border-right: 8px solid red;
  }
  `]
})
export class FormAlbumEditComponent implements OnInit {
  public albumForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customValidatorsService: CustomValidatorsService,
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap
      .pipe(map(res => res.get('id')))
      .subscribe(idAlbum => {
        this.getAlbumById(idAlbum);
      })

    this.buildAlbumForm();

  }

  private getAlbumById(id) {
    this.albumsService.getById$(id).subscribe(album => {
      console.log(album);
      this.loadAlbumForm(album);
    });
  }

  private loadAlbumForm(album) {
    this.albumForm.patchValue({
      userId: album.userId,
      title: album.title,
      id: album.id,
    })
  }

  private buildAlbumForm() {
    const controls = this.initializeControls();
    this.albumForm = this.formBuilder.group(controls);
  }

  private initializeControls() {
    return {
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]],
      // numero: [0, [Validators.required, this.customValidatorsService.onlyNumber, this.customValidatorsService.onlyNumberPositive]],
    }
  }

  public onSubmitAlbum() {
    const value = this.albumForm.value;
    this.albumsService.update$(value.id, value)
      .subscribe(album => {
        console.log('album editado');
      });
  }
}

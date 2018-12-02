import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album';

@Injectable()
export class AlbumsService {
  private url = `${environment.apiUrl}albums`;
  constructor(private httpClient: HttpClient) { }

  public getAll$(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.url);
  }
}

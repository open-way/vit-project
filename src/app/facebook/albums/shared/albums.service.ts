import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album';

@Injectable()
export class AlbumsService {
  private url = `${environment.apiUrl}albums`;
  // private url = `albums`;
  constructor(private httpClient: HttpClient) { }

  public getById$(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.url}/${id}`);
  }

  public getAll$(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.url);
  }

  public save$(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(this.url, album);
  }

  public update$(id: number, album: Album): Observable<Album> {
    return this.httpClient.put<Album>(`${this.url}/${id}`, album);
  }

  public delete$(id: number): Observable<Album> {
    return this.httpClient.delete<Album>(`${this.url}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Post } from '../models/post';
// import { POSTS } from './mock-posts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostsService {
    private urlApi: string = `${environment.apiUrl}/posts`;

    constructor(private httpClient: HttpClient) {
    }

    public getAll(): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(this.urlApi, {})
    }

    public getById(id): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>(`${this.urlApi}/${id}`)
    }

    public add(data: Post): Observable<Post> {
        return this.httpClient
            .post<Post>(this.urlApi, data);
    }

    public update(id: number, post: Post): Observable<Post> {
        return this.httpClient
            .put<Post>(`${this.urlApi}/${id}`, post)
    }

    public delete(postId: number): Observable<any> {
        return this.httpClient
            .delete<any>(`${this.urlApi}/${postId}`);
    }
}

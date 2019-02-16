import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(
        private http: HttpClient
    ) { }

    getPostById(id: number): Observable<Post> {
        return this.http.get<Post>(`${environment.api}/posts/${id}`);
    }
}


export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

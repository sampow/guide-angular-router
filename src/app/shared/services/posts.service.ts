import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    public apiUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.apiUrl = environment.api;
    }

    getPostById(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.apiUrl}/posts/${id}`);
    }
}


export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

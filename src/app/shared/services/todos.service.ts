import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(
        private http: HttpClient
    ) { }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${environment.api}/todos`);
    }

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${environment.api}/todos/${id}`);
    }
}

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;

}

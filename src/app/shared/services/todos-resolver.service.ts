import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Todo, TodosService } from './todos.service';

@Injectable()
export class TodoDataResolver implements Resolve<any> {

    constructor(private todosService: TodosService) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        const todoId = route.params['id'];
        return this.todosService.getTodoById(+todoId);
    }
}


























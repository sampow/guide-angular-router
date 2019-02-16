import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from '../shared/services/todos.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Todo[];

    constructor(private todoService: TodosService) { }

    ngOnInit() {
        this.getAllTodos();
    }

    getAllTodos() {
        this.todoService.getAllTodos().subscribe(
            data => {
                this.todos = data;
            }
        );
    }
}

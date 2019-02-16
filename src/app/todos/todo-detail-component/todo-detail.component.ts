import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from '../../shared/services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

    public todo: Todo;
    public mySpecialData: string;

    constructor(private todoService: TodosService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.getTodoIdWithSwichMap();
        this.getMySpecialDataWithRouterSnapshot();
    }

    /**
     * Get to by id
     * version 1
     */
    getTodoId() {
        this.activatedRoute
            .params
            .subscribe(params => {
                const todoId = params['id'];
                this.todoService.getTodoById(+todoId).subscribe(todo => {
                    this.todo = todo;
                });
            });
    }

    /**
     * Get to by id
     * version 2
     * a "better" a way
     */
    getTodoIdWithSwichMap() {
        this.activatedRoute
            .params
            .pipe(
                switchMap(
                    params => {
                        return this.todoService.getTodoById(+params['id']);
                    }
                )
            )
            .subscribe(todo => {
                this.todo = todo;
            });
    }

    /**
     * 
     */
    getMySpecialDataWithRouterSnapshot() {
        this.mySpecialData = this.activatedRoute.snapshot.data['mySpecialData'];
    }

    getMySpecialDataWithRouterParams() {
        this.activatedRoute.data.subscribe(
            data => {
                this.mySpecialData = data['mySpecialData'];
            }
        );
    }

}

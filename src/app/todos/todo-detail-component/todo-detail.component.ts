import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from '../../shared/services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

    public todo: Todo;
    public mySpecialData: string;
    public description: string = null;

    constructor(private router: Router,
        private todoService: TodosService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.getTodoIdWithSwichMap();
        this.getMySpecialDataWithRouterSnapshot();
    }

    /**
     * 
     */

     getBackToAllTodos() {
         // OPTION 1
        // this.router.navigateByUrl('/todos');
        // OPTION 2
        this.router.navigate(['/todos']).then(
            success => {
                console.log('navigation to all todos is done');
            }
        );
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

    /**
     * SAVE
     * FAKE method
     * nothing to see here
     */

    save(description) {
        // simulate saving the detail
        console.log('description', description);
    }

}

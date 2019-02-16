import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from '../../shared/services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail-resolved.component.html',
    styleUrls: ['./todo-detail-resolved.component.scss']
})
export class TodoDetailResolvedComponent implements OnInit {

    public todo: Todo;

    constructor(private todoService: TodosService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.getTodo();
    }

    /**
     * 
     * the difference is our data is no longer loaded  from  
     * TodoDetailComponent, but within our TodoDataResolver, 
     * which gets called whenever we route from a different 
     * route via that /todo/:id.
     */

    getTodo() {
        this.activatedRoute
            .data
            .subscribe( data => {
                this.todo = data['todo'];
            });
    }




}

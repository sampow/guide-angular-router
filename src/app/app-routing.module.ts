import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todos/todo-detail-component/todo-detail.component';
import { TodoDetailResolvedComponent } from './todos/todo-detail-resolved-component/todo-detail-resolved.component';
import { TodoDataResolver } from './shared/services/todos-resolver.service';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'todo-detail/:id',
        component: TodoDetailComponent,
        // you can pass static data (string, booleaan , object...) here
        // that can be used from within a route resolver, 
        // route guard or the routed component 
        data: {
            mySpecialData: {
                title: 'Garmin',
                id: 'Dj767%sdsd*ssdsd$'
            }
        }
    },
    {
        path: 'todo-detail-resolved/:id',
        component: TodoDetailResolvedComponent,
        resolve: {
            todo: TodoDataResolver
        }
    },
    { // LAZY LOADING
        path: 'post',
        loadChildren: './posts/posts.module#PostsModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

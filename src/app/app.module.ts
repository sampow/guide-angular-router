import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsModule } from './posts/posts.module';
import { TodoDetailComponent } from './todos/todo-detail-component/todo-detail.component';
import { TodoDetailResolvedComponent } from './todos/todo-detail-resolved-component/todo-detail-resolved.component';
import { TodoDataResolver } from './shared/services/todos-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    TodoDetailComponent,
    TodoDetailResolvedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // chargement d'un module qui n'est pas chargé de facon lazy
    PostsModule,
    // il est important de charger le routing général du site en dernier car sinon cela peut créer des effets de bord
    AppRoutingModule
  ],
  providers: [TodoDataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

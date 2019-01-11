import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

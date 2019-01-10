# AngularRouterGuide

Le guide pour comprendre le router de angular

## Sommaire

## Installation

## Usage

----

### 01 - Adding routing to the Angular project

Tout d'abord il faut ajouter le module de routing de angular dans votre application si ce n'est pas encore fait

    $ npm i @angular/router --save

Ensuite mettre à jour le module principal ainsi que le fichier de routing.
Il faut noter que lorsque j'ai génré le projet avec le CLI j'ai aussi ajouté le systeme de routing qui m'ajouté automatiquement le fichier app-routing.modules.ts qui gère le routing principal de l'application

Les fichiers à mettre à jour

#### Faire fonctionner le routing d'angular

Dans **app-routing.module.ts**, il faut importer le RouterModule depuis angular

    import { Routes, RouterModule } from '@angular/router';

puis ajouter le routerModule dans la liste des imports pour qu'il puisse être utilisé

    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

Afin que l'utilisateur soit bien redirigé vers la bonne page, il faut créer un array de routes. On peut le faire grace à la constante routes qui sera injecté dans le RouterModule


    const routes: Routes = [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home'
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'blog',
            component: BlogComponent
        },
        {
            path: '**',
            component: NotFoundComponent
        }
    ];


Plusieurs chose à comprendre

- forRoot: 

- routes: Routes: 

- pathMatch: la stratégie de prise en compte de l'url

- redirectTo: 'home' : redirige automatiquement vers home

- component: le component à charger

- path: 'home': l'url demandée par l'utilisateur

- path: '**': quelque soit l'url qui n'a pas été encore définit C'est une sorte de 404


#### app.modules.ts
    
Afin de pouvoir utiliser le routing il faut maintenant l'ajouter dans notre module principal, dans la liste des imports de modules donc.

    import { AppRoutingModule } from './app-routing.module';

    imports: [
        BrowserModule,
        AppRoutingModule
    ],

 
#### app.component.html

    <router-outlet></router-outlet>


----


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

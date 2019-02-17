import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private _showMenu = false;

    set showMenu(value) {
        this._showMenu = value;
    }
    get showMenu() {
        return this._showMenu;
    }

    constructor() { }
}

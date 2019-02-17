import { Component } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angularRouterGuide';

    constructor(private navigationService: NavigationService) { }


    getMenuDisplay() {
        return this.navigationService.showMenu;
    }

    setMenuDisplay(value: boolean) {
        this.navigationService.showMenu = value;
    }

}

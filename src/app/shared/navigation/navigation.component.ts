import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


    constructor(private navigationService: NavigationService) { }

    ngOnInit() {
    }

    getMenuDisplay() {
        return this.navigationService.showMenu;
    }

    setMenuDisplay(value: boolean) {
        this.navigationService.showMenu = value;
    }

}

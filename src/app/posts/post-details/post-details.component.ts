import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

    public pageDetails: string;

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        /*
        this.activatedRoute.params.subscribe(
            data => {
                console.log(data);
                this.pageDetails = data.postId;
            }
        );
        */
        // is the almost the same things that
        this.pageDetails = this.activatedRoute.snapshot.params['postId'];
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post } from 'src/app/shared/services/posts.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

    public post: Post;
    public pageDetailsParameters: string;
    public pageDetailsQueryParameters: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private postService: PostService
    ) { }

    ngOnInit() {

        /**
         * How to get routes parameters
         *

        this.activatedRoute
        .params
        .subscribe(
            data => {
                console.log('pageDetailsParameters ', data);
                this.pageDetailsParameters = data.postId;

                // retrieve data from API
                this.postService.getPostById(+ this.pageDetailsParameters).subscribe(
                    apiData => {
                        console.log('getPostById', apiData);
                        this.post = apiData;
                    }
                );
            }
        );
        */
        

        // but we can write it a better way with rxjs
/*
        this.activatedRoute
        .params
        .pipe(
            switchMap(params => this.postService.getPostById(+params['postId']))
        )
        .subscribe(
            post => {
                console.log('getPostById', post);
                this.post = post;
            }
        );
        */

        // is the almost the same things that
        this.pageDetailsParameters = this.activatedRoute.snapshot.params['postId'];

        /**
         * How to get query parameters
         */
        this.activatedRoute.queryParams.subscribe(
            data => {
                console.log('pageDetailsQueryParameters ', data);
                this.pageDetailsQueryParameters = data.display === 'true';
            }
        );


        // if you are sure that there will be always a query params you can use snapshot
        // this.pageDetailsQueryParameters = this.activatedRoute.snapshot.queryParams['display'] === 'true';

    }

}

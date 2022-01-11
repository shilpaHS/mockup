import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Post } from './post.model'
@Injectable({
    providedIn: 'root'
})
export class PostService {
    private api_url: string = 'https://jsonplaceholder.typicode.com/';
    constructor(private httpClient: HttpClient) {
    }
    getPosts(): Observable<Post[]> {
        return this.httpClient.get(this.api_url + 'posts/')
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    getPostById(id: number) {
        return this.httpClient.get(this.api_url + 'posts/' + id)
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    throwError(error: any) {
        console.error(error);
        return throwError(error.json().error || 'Server error');
    }
}

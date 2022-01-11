import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Photo } from './../photo/photo.model'
import { Post } from './../post/post.model'
import { Album } from './../album/album.model'
@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private api_url: string = 'https://jsonplaceholder.typicode.com/';
    constructor(private httpClient: HttpClient) {
    }
    getPhotos(): Observable<Photo[]> {
        return this.httpClient.get(this.api_url + 'photos/')
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    getAlbum(): Observable<Album[]> {
        return this.httpClient.get(this.api_url + 'albums/')
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }

    getPosts(): Observable<Post[]> {
        return this.httpClient.get(this.api_url + 'posts/')
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    throwError(error: any) {
        console.error(error);
        return throwError(error.json().error || 'Server error');
    }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Album } from './album.model'
@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private api_url: string = 'https://jsonplaceholder.typicode.com/';
    constructor(private httpClient: HttpClient) {
    }
    getAlbum(): Observable<Album[]> {
        return this.httpClient.get(this.api_url + 'albums/')
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    getPhotoById(id: number) {
        return this.httpClient.get(this.api_url + 'albums/' + id)
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    getPhotos() {
        return this.httpClient.get(this.api_url + 'photos/')
            .pipe(map((resp: any) => resp),
                catchError(error => this.throwError(error))
            )
    }
    throwError(error: any) {
        console.error(error);
        return throwError(error.json().error || 'Server error');
    }
}

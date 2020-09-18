import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { moviedbkey } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getMovies(term: string) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + moviedbkey + '&query=' + term).pipe(
            catchError(err => of([]))
        );
    }

    getVideos(id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=' + moviedbkey + '&language=en-US').pipe(
            catchError(err => of([]))
        );
    }

}

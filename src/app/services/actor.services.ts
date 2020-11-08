import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { moviedbkey } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ActorService {

    constructor(private http: HttpClient) { }

    getActors(term) {

        return this.http.get('https://api.themoviedb.org/3/search/person?api_key=' + moviedbkey + '&language=en-US&query=' + term + '&page=1&include_adult=true').pipe(
          catchError(err => of([]))
        );
      }

}

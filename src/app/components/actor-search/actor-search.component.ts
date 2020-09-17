import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { Observable, of, interval } from 'rxjs';
import { moviedbkey } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.css']
})
export class ActorSearchComponent implements OnInit {

  title = 'app';
  actorList = [];

  constructor(private http: HttpClient) { }



  getActors(term) {

    return this.http.get('https://api.themoviedb.org/3/search/person?api_key=' + moviedbkey + '&language=en-US&query=' + term + '&page=1&include_adult=true').pipe(
      catchError(err => of([]))
    );
  }

  onKey(event) {

    const inputValue = event.target.value;
    if (event.target.value.length > 0) {
      this.getActors(inputValue).pipe(delay(50)).subscribe((data) => {
        const results = Object.entries(data);
        this.actorList = [];
        for (const result of results[3][1]) {
          if (result.known_for_department === 'Acting') {
            result.actorimg = 'https://image.tmdb.org/t/p/w92/' + result.profile_path;
            this.actorList.push(result);
          } else {
            return;
          }
        }
      });
    }
  }
  ngOnInit(): void {
  }

}

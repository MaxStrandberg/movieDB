import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';
import { Observable, of, interval } from 'rxjs';
@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.css']
})
export class ActorSearchComponent implements OnInit {

  actorList = [];

 constructor(private http: HttpClient) { }


  getActors(term) {

    return this.http.get("https://api.themoviedb.org/3/search/person?api_key=5168fd8e78b128991776c9d880afc6a5&language=en-US&query="+term+"&page=1&include_adult=true").pipe(
      catchError(err => of([]))
    );
  }

  onKey(event) {
    const inputValue = event.target.value;
    if (event.target.value.length > 1 ){
    this.getActors(inputValue).pipe().subscribe( (data) => {
        const result = Object.entries(data);
        this.actorList = result[3][1];
    });
    }
  }

  ngOnInit(): void {
  }

}

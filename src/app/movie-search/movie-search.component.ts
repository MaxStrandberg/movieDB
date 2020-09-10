import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';
import { Observable, of, interval } from 'rxjs';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movieList = [];
  title: string;


  constructor(private http: HttpClient) {}



  getMovies(term){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=5168fd8e78b128991776c9d880afc6a5&query=' + term).pipe(
      catchError(err => of([]))
    );
  }


  onKey(event) {
    const inputValue = event.target.value;
    if (event.target.value.length > 1 ){

    this.getMovies(inputValue).pipe().subscribe( (data) => {
        const result = Object.entries(data);
        this.movieList = result[3][1];
    });
  }
  }


  ngOnInit(): void {

  }

}

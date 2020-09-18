import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';
import { Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingList = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    this.http.get('https://api.themoviedb.org/3/trending/all/week?api_key=5168fd8e78b128991776c9d880afc6a5').subscribe((data) => {
      const result = Object.entries(data);
      this.trendingList = result[1][1];
      this.trendingList = this.trendingList.slice(1, 6);
    });
  }

}

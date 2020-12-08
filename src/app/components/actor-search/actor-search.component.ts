import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { ActorService } from '../../services/actor.services';



@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.css']
})
export class ActorSearchComponent implements OnInit {

  title = 'app';
  actorList = [];

  constructor(
    private http: HttpClient,
    private actorService: ActorService
  ) { }


  onKey(event) {

    const inputValue = event.target.value;

    if (inputValue.length > 0) {
      this.actorService.getActors(inputValue).pipe(delay(50)).subscribe((data) => {
        const results = Object.entries(data);
        this.actorList = [];

        for (const result of results[1][1]) {
          if (result.known_for_department === 'Acting') {
            result.actorimg = 'https://image.tmdb.org/t/p/w92/' + result.profile_path;
            this.actorList.push(result);
          } else {
            return;
          }
        }
      });

    } else if (inputValue.length === 0 && event.key === 'Backspace') {
      this.actorList = [];
    }

  }

  ngOnInit(): void {
  }

}

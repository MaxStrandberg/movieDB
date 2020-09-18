import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, mergeMap } from 'rxjs/operators';
import { concat, forkJoin, of } from 'rxjs';
import { moviedbkey } from 'src/environments/environment';
import { MovieService } from '../../services/movie.services';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';







@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MovieSearchComponent implements OnInit {
  movieList = [];
  title: string;
  list = [];
  safeurl: any;
  modalinfo = [];


  constructor(
    private http: HttpClient,
    private movieService: MovieService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer
  ) {

    config.backdrop = 'static';
    config.keyboard = false;
    config.size = 'lg';
  }



  onKey(event) {

    const inputValue = event.target.value;
    if (event.target.value.length > 1) {
      this.getMovieList(inputValue);
    }
  }

  open(content, id, i) {
    this.modalinfo = this.list[i];
    this.getTrailer(id, i);
    
    this.modalService.open(content);
  }


  getMovieList(input: string) {
    this.movieService.getMovies(input).pipe(delay(100)).subscribe(async (data) => {
      const result = Object.entries(data);
      this.movieList = result[3][1];
      this.list = [];

      for (const movie of this.movieList) {
        this.list.push(movie);
      }
    });
    return this.list;
  }

  getTrailer(id, i) {
    this.movieService.getVideos(id).pipe().subscribe((data) => {
      const key = 'https://www.youtube.com/embed/' + data['results'][0]['key'];
      this.list[i].trailer = key;
    });
  }

  createSafeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



  ngOnInit(): void {

  }

}

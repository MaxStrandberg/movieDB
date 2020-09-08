import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { RouterModule } from '@angular/router';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    ActorSearchComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'movie-search', component: MovieSearchComponent},
      {path: 'actor-search', component: ActorSearchComponent},
      {path: 'feedback', component: FeedbackComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

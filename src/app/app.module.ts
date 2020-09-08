import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { RouterModule } from '@angular/router';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    ActorSearchComponent,
    FeedbackComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'movie-search', component: MovieSearchComponent},
      {path: 'actor-search', component: ActorSearchComponent},
      {path: 'feedback', component: FeedbackComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
      { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

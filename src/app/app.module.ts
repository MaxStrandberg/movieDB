import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { RouterModule } from '@angular/router';
import { ActorSearchComponent } from './components/actor-search/actor-search.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    ActorSearchComponent,
    FeedbackComponent,
    PageNotFoundComponent,
    FooterComponent,
    FeedbackListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'movie-search', component: MovieSearchComponent},
      {path: 'actor-search', component: ActorSearchComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'feedback-list', component: FeedbackListComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
      { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ]),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie-list.component';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './account/create-account.component';
import { MyMoviesComponent } from './account/my-movies.component';
import { CreateMovieComponent } from './admin/create-movie.component';
import { NonfoundComponent } from './shared/components/nonfound.component';
import { GenreComponent } from './genre/genre.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,
    MyMoviesComponent,
    CreateMovieComponent,
    NonfoundComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost']
      }
    }),
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'movies', component: MovieListComponent},
      {path: 'movies/:id', component: MovieListComponent}, // MovieByIdComponent
      {path: 'genre/:id', component: GenreComponent},
      {path: 'login', component: CreateAccountComponent},
      {path: 'account/create', component: CreateAccountComponent},
      {path: 'my/movies', component: MyMoviesComponent},
      {path: 'admin/movies/new', component: CreateMovieComponent},
      {path: '**', component: MovieListComponent},
    ])
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

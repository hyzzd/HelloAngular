import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../services/movie.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  //movie: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(
      m => {
        this.movies = m;
        console.table(this.movies);
      }
    );
    /* this.movieService.getMovieById(1).subscribe(
      m => {
        this.movie = m;
        console.log(m);
      }
    ) */
    //this.movies = [];
    //this.movies.push(this.movie);
  }

}

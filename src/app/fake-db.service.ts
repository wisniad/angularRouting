import { Movie } from './movie/Movie';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FakeDbService {


  constructor() { }
  movies = [
    new Movie(1, 'Terminator 2', 1991, 4),
    new Movie(2, 'Rogue one', 2018, 2),
    new Movie(3, 'Lord of the rings', 2004, 3),
    new Movie(4, 'Matrix', 1999, 5)
  ];

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.filter( (movie) => movie.id == id)[0];
  }

  createMovie(movie: Movie) {
    this.movies.push(movie);
  }

  getNewId() {
    return (this.movies[this.movies.length - 1].id + 1);
  }

  removeMovieByTitle(title: string) {
    this.movies = this.movies
    .filter(
      movie => movie.title !== title
      );
  }
}

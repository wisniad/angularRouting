import { FakeDbService } from './../fake-db.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from '../movie/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = new Array<Movie>();

  newTitle = '';
  newYear: number;

  constructor(private fakeDb: FakeDbService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.movies = this.fakeDb.getMovies();
    console.log('>>> Movies in service: ', this.fakeDb.getMovies());
  }

  addNewMovie() {
    this.fakeDb.createMovie(new Movie(this.fakeDb.getNewId(), this.newTitle, this.newYear, 0));
    console.log('> Added: ' + this.newTitle);
    this.newTitle = null;
    this.newYear = null;
    this.refresh();
  }

  removeMovie(title: string) {
    console.log('>> Removed: ' + title);
    this.fakeDb.removeMovieByTitle(title);
    this.refresh();
  }
}



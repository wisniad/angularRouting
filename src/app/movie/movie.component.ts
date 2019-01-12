import { FakeDbService } from './../fake-db.service';
import { Movie } from './Movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private fakeDbService: FakeDbService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const movieId = Number(param.get('id'));

      this.movie = this.fakeDbService.getMovie(movieId);
    });

  }

}

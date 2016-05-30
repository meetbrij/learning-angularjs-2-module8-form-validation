import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { MovieDetailComponent } from './movie-detail.component';

@Component({
  selector: 'my-grid-view',
  templateUrl: 'app/grid-view.component.html',
  styleUrls: ['app/grid-view.component.css'],
  directives: [MovieDetailComponent]
})
export class GridViewComponent implements OnInit {
	movies: Movie[] = [];
	selectedMovie: Movie;
	
	constructor(
		private router: Router,
		private movieService: MovieService,
		private routeParams: RouteParams
	) { }
	
	ngOnInit() {
	  this.movieService.getMovies().subscribe(
    		data => {
    			this.movies = data.movies;
    		}
  	);
  }
  	
  showMovieDetails(movie:Movie) {
    this.selectedMovie = movie;
  }
}
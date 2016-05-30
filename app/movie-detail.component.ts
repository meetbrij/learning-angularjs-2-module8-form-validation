import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from './movie';
import { Router, RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-movie-detail',
	templateUrl: 'app/movie-detail.component.html',
	styleUrls: ['app/movie-detail.component.css']
})
export class MovieDetailComponent implements OnChanges {
	@Input()
	movie: Movie;
	isAdult = false;

	constructor(
		private router: Router,
		private routeParams: RouteParams
	) { }
  
  	ngOnChanges() {
  		if(this.movie) {
  			if(this.movie.mpaaRating.type == "M18" ||  this.movie.mpaaRating.type == "R21") {
    			this.isAdult = true; 
    		} else {
    			this.isAdult = false;
    		}
  		}
	}

	onCloseModal() {
		this.movie = null;
	}

	onEditMovieDetails(movie:Movie) {
		let link = ['EditMovieDetail', { id: movie.id }];
		this.router.navigate(link);
	}
}
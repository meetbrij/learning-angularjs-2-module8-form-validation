import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
	selector: 'edit-movie-detail',
	templateUrl: 'app/edit-movie-detail.component.html',
	styleUrls: ['app/edit-movie-detail.component.css']
})
export class EditMovieDetailComponent implements OnInit {
	movie: Movie;
	movies: Movie[] = [];
	audiences = ['PG','PG13','NC16','M18','R21'];
	languages = ['English', 'Hindi', 'Mandarin', 'Tamil', 'Korean'];
	userratings = ['1', '2', '3', '4', '5'];
	submittedForm = false;

	constructor(
		private router: Router,
		private movieService: MovieService,
		private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.movieService.getMovies().subscribe(
    		data => {
    			this.movies = data.movies;
    			this.movie = this.movies.filter(mv => mv.id == id)[0];
    		}
  		);
	}

	onSubmitForm() {
		this.submittedForm = true;

		let link = ['LanguageGrid', { language: '' }];
		this.router.navigate(link);
	}
}
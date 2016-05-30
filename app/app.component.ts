import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { GridViewComponent } from './grid-view.component';
import { EditMovieDetailComponent } from './edit-movie-detail.component';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/:language',
    name: 'LanguageGrid',
    component: GridViewComponent,
    useAsDefault: true
  },
  {
    path: '/edit/:id',
    name: 'EditMovieDetail',
    component: EditMovieDetailComponent
  }
])

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ROUTER_PROVIDERS, MovieService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Movie Listings @ GV Cinema';

  constructor(
    private router: Router
  ) { }
}
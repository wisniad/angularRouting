import { MovieComponent } from './movie/movie.component';
import { Movie } from './movie/Movie';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: ':id',
        component: MovieComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BG_IMG, LOGO_URL } from './constants/constants';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix-clone';
  logo = LOGO_URL
  bgImage = BG_IMG
  movies: any
  constructor(private movieData: MovieService,) {}

  ngOnInit(): void {
    this.movieData.getMovieDetail().subscribe((data: any) => {
      this.movies = data;
      this.bgImage = this.movies.trailer.youtube_thumbnail
    });
    this.movieData.getDefaultImage().subscribe((data: any) => {
      this.bgImage = data || BG_IMG
    })
  }
}

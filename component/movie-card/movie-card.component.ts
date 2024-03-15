import { Component } from "@angular/core";
import { MovieService } from "../../service/movie.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./movie-card.component.html",
  styleUrl: "./movie-card.component.scss",
})
export class MovieCardComponent {
  movies: any;
  constructor(private movieData: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieData.getData().subscribe((data: any) => {
      this.movies = data;
    });
  }

  movieDetails(e: any) {
    this.movieData.setMovieDetail(e);
    this.router.navigate(['/details']);
  }
}

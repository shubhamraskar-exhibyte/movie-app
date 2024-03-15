import { Component } from "@angular/core";
import { MovieService } from "../../service/movie.service";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-movie-details",
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: "./movie-details.component.html",
  styleUrl: "./movie-details.component.scss",
})
export class MovieDetailsComponent {
  movies: any;
  selected: any;
  constructor(private movieData: MovieService) {}

  ngOnInit(): void {
    this.movieData.getMovieDetail().subscribe((data: any) => {
      this.movies = data;
      
      console.log(this.movies);
    });
  }

  getEmbedUrl(videoId: string, channelId: string): string {
    return `https://www.youtube.com/embed/${videoId}?si=m3cgivlHTBOaFbOT&channel=${channelId}`;
  }
}

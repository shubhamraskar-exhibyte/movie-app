import { Component } from "@angular/core";
import { NgImageSliderModule } from "ng-image-slider";
import { ImageSliderComponent } from "../../component/image-slider/image-slider.component";
import { MovieCardComponent } from "../../component/movie-card/movie-card.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MovieService } from "../../service/movie.service";
import { MOVIE_ID, MOVIE_TYPE } from "../../types/movie";
import { BASE_URL } from "../../constants/constants";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    NgImageSliderModule,
    ImageSliderComponent,
    MovieCardComponent,
    HttpClientModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  moviesType = MOVIE_TYPE;
  baseURL = BASE_URL;
  tmdbId = MOVIE_ID;
  constructor(private http: HttpClient, private movieData: MovieService) {}

  ngOnInit() {
    this.http
      .get(`${this.baseURL}/${this.moviesType}?tmdb_id=${this.tmdbId}`)
      .subscribe((data: any) => {
        this.movieData.setData(data);
      });

  }
}

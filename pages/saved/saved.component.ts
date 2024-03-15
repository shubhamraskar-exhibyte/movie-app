import { Component } from '@angular/core';
import { MovieCardComponent } from '../../component/movie-card/movie-card.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [MovieCardComponent,MovieCardComponent,
    RouterOutlet,
    RouterModule,
    CommonModule,
    FormsModule,],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.scss'
})
export class SavedComponent {
  movies = [
    
    {
      id: 2,
      title: "Breaking Bad",
      type: "series",
      creator: "Vince Gilligan",
      releaseYear: 2008,
      genre: ["Crime", "Drama", "Thriller"],
      rating: 9.5,
      image: "https://via.placeholder.com/300x400?text=Breaking+Bad",
    },
   
    {
      id: 4,
      title: "Inception",
      type: "movie",
      director: "Christopher Nolan",
      year: 2010,
      genre: ["Action", "Adventure", "Sci-Fi"],
      rating: 8.8,
      image: "https://via.placeholder.com/300x400?text=Inception",
    },
    {
      id: 5,
      title: "Stranger Things",
      type: "series",
      creator: "The Duffer Brothers",
      releaseYear: 2016,
      genre: ["Drama", "Fantasy", "Horror"],
      rating: 8.7,
      image: "https://via.placeholder.com/300x400?text=Stranger+Things",
    },
    {
      id: 1,
      title: "The Shawshank Redemption",
      type: "movie",
      director: "Frank Darabont",
      year: 1994,
      genre: ["Drama"],
      rating: 9.3,
      image:
        "https://via.placeholder.com/300x400?text=The+Shawshank+Redemption",
    },
    {
      id: 3,
      title: "Attack on Titan",
      type: "anime",
      director: "Tetsurō Araki",
      year: 2013,
      genre: ["Action", "Fantasy"],
      rating: 8.8,
      image: "https://via.placeholder.com/300x400?text=Attack+on+Titan",
    },
  ];
  filteredMovies: any;
  searchTerm: any;
  sortBy = "rating";
  ngOnInit(): void {
    this.filteredMovies = [...this.movies];
  }

  sortMovies(): void {
    this.filteredMovies = this.filteredMovies.sort((a: any, b: any) => b.year - a.year
    );
  }
}

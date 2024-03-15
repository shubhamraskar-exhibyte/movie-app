import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-browser",
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: "./browser.component.html",
  styleUrl: "./browser.component.scss",
})
export class BrowserComponent {
  // movie static json
  movies = [
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
      id: 3,
      title: "Attack on Titan",
      type: "anime",
      director: "Tetsurō Araki",
      year: 2013,
      genre: ["Action", "Fantasy"],
      rating: 8.8,
      image: "https://via.placeholder.com/300x400?text=Attack+on+Titan",
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
  ];
  filteredMovies: any;
  searchTerm: any;
  ngOnInit(): void {
    this.filteredMovies = [...this.movies];
  }

  // movie filter by type
  filterMovie = (type: "movie" | "series" | "anime" | "all") => {
    if (type && type !== "all") {
      this.filteredMovies = [...this.movies.filter((o) => o.type === type)];
    } else {
      this.filteredMovies = [...this.movies];
    }
  };

  // Search function
  search() {
    this.filteredMovies = [
      ...this.movies.filter((o) =>
        o.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      ),
    ];
  }
}

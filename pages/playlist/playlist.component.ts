import { Component } from '@angular/core';
import { MovieCardComponent } from '../../component/movie-card/movie-card.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {

}

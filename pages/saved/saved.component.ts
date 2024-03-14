import { Component } from '@angular/core';
import { MovieCardComponent } from '../../component/movie-card/movie-card.component';

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.scss'
})
export class SavedComponent {

}

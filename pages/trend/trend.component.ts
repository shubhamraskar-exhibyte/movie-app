import { Component } from '@angular/core';
import { MovieCardComponent } from '../../component/movie-card/movie-card.component';

@Component({
  selector: 'app-trend',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './trend.component.html',
  styleUrl: './trend.component.scss'
})
export class TrendComponent {

}

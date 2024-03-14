import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImageSliderComponent } from '../../component/image-slider/image-slider.component';
import { MovieCardComponent } from '../../component/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgImageSliderModule, ImageSliderComponent, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
}

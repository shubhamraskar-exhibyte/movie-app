import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  imageObject: Array<object> = [
    {
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad274068345705.5c6b7b811c6fd.jpg',
      thumbImage:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad274068345705.5c6b7b811c6fd.jpg',
      alt: 'alt of image',
    },
    {
      image:
        'https://marketplace.canva.com/EAE66-fThJI/1/0/1600w/canva-dark-movie-trailer-youtube-thumbnail-Y460nmpXiXM.jpg',
      thumbImage:
        'https://marketplace.canva.com/EAE66-fThJI/1/0/1600w/canva-dark-movie-trailer-youtube-thumbnail-Y460nmpXiXM.jpg',
      alt: 'alt of image',
    },
    {
      image:
        'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
      thumbImage:
        'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
      alt: 'alt of image',
    },
    {
      image:
        'https://images.ottplay.com/images/jawan-releasing-worldwide-7th-sep-2023-hindi-tamil-telugu-youtube-thumbnail-1693548898831-262.jpg?impolicy=ottplay-20210210&width=1200&height=675',
      thumbImage:
        'https://images.ottplay.com/images/jawan-releasing-worldwide-7th-sep-2023-hindi-tamil-telugu-youtube-thumbnail-1693548898831-262.jpg?impolicy=ottplay-20210210&width=1200&height=675',
      alt: 'alt of image',
    },
    {
      image:
        'https://i.ytimg.com/vi/ymLwqYv9_6E/maxresdefault.jpg',
      thumbImage:
        'https://i.ytimg.com/vi/ymLwqYv9_6E/maxresdefault.jpg',
      alt: 'alt of image',
    },
    {
      image:
        'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
      thumbImage:
        'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
      alt: 'alt of image',
    },
  ];
}

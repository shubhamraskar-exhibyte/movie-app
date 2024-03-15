import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieData$ = new BehaviorSubject<any>(null);
  private movieMOvieDetails$ = new BehaviorSubject<any>(null);
  private defaultImage$ = new BehaviorSubject<any>(null);
  constructor() { }

  setData(data: any) {
    this.movieData$.next(data);
  }

  getData() {
    return this.movieData$.asObservable();
  }

  setMovieDetail(data: any) {
    this.movieMOvieDetails$.next(data);
  }

  getMovieDetail() {
    return this.movieMOvieDetails$.asObservable();
  }

  setDefaultImage(image: any) {
    this.defaultImage$.next(image);
  }

 getDefaultImage() {
  return this.defaultImage$.asObservable();
 }
  
}

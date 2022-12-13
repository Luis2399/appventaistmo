import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slide } from 'src/interfaces/slide.interface';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor( private http: HttpClient) { }

  getSlides(){
    return this.http.get<Slide[]>('/assets/json/slides.json');
  }
}

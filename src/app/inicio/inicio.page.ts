import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slide } from 'src/interfaces/slide.interface';
import { SlidesService } from '../services/slides.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  slides : Slide[] = [];

  constructor( private _slidesService: SlidesService,
               private router:Router) { }

  ngOnInit() {
    this._slidesService.getSlides().subscribe(
      (resp) => {
        this.slides = resp;
        console.log(this.slides);
      }
    );
  }

  redirige ( path: string){
    this.router.navigate([path]);
  }

}

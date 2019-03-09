import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);

  myCarouselOptions={items: 1, dots: false, nav: true, margin:30, autoHeight: true}

  constructor() { }

  ngOnInit() {
  }

}

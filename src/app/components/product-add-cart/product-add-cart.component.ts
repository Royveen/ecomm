import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ecomm-product-add-cart',
  templateUrl: './product-add-cart.component.html',
  styleUrls: ['./product-add-cart.component.scss']
})
export class ProductAddCartComponent implements OnInit {

  @Input('image') imageSrc: string;
  constructor() { }

  ngOnInit() {
  }

}

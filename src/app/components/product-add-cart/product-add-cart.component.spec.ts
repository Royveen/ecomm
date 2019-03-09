import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddCartComponent } from './product-add-cart.component';

describe('ProductAddCartComponent', () => {
  let component: ProductAddCartComponent;
  let fixture: ComponentFixture<ProductAddCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

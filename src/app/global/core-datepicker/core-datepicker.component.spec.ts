import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDatepickerComponent } from './core-datepicker.component';

describe('CoreDatepickerComponent', () => {
  let component: CoreDatepickerComponent;
  let fixture: ComponentFixture<CoreDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

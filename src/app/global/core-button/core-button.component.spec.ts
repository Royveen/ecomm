import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreButtonComponent } from './core-button.component';

describe('CoreButtonComponent', () => {
  let component: CoreButtonComponent;
  let fixture: ComponentFixture<CoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

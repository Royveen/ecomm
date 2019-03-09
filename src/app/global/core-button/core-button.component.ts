import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-core-button',
  templateUrl: './core-button.component.html',
  styleUrls: ['./core-button.component.scss']
})
export class CoreButtonComponent implements OnInit {

  constructor() { }

  @Input() btnLabel: string;
  @Input() btnClasses: string;
  @Input() typeText: string;
  @Input() ariaLabel: string;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  @Output() btnSubmit: EventEmitter<any> = new EventEmitter();

  public onClick(): void {
    this.btnClick.emit(null);
  }

  public onSubmit(): void {
    this.btnSubmit.emit(null);
  }

  ngOnInit() {
  }

}

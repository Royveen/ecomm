import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  @Input() idText: String;
  @Input() nameText: String;
  @Input() typeText: String;
  @Input() labelText: String;
  @Input() inputClasses: String;
  @Input() labelClasses: String;
  @Input() autocomplete: String;
  @Input() valueText: string;
  @Input() disabled: string;
  @Input() inputGroupClass: string;
  @Input() groupClasses: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onChange(event): void {
    const val = event.target.value;
    console.log(val);
    this.valueChange.emit(val);
  }
}

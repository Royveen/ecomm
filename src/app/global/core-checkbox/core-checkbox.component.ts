import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-core-checkbox',
  templateUrl: './core-checkbox.component.html',
  styleUrls: ['./core-checkbox.component.scss']
})
export class CoreCheckboxComponent implements OnInit {

  constructor() { }

  @Input() idText: String;
  @Input() nameText: String;
  @Input() labelText: String;
  @Input() inputClasses: String;
  @Input() checked: boolean;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  public onChange(event) {
    const val = event.target.checked;
    this.valueChange.emit(val);
  }
}

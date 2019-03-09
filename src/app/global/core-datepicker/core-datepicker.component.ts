import {
  Component,
  forwardRef,
  ElementRef,
  Input,
  OnInit,
  NgZone,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';

import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

declare var $: any;
import * as moment from 'moment';
import {
  OnChanges
} from '@angular/core/src/metadata/lifecycle_hooks';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CoreDatepickerComponent),
  multi: true
};

@Component({
  selector: 'app-core-datepicker',
  templateUrl: './core-datepicker.component.html',
  styleUrls:['./core-datepicker.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CoreDatepickerComponent implements ControlValueAccessor, AfterViewInit, OnChanges {

  @Input('inputclass') inputclass: string;
  @Input('ngId') ngId: string;
  @Input('valueText') setDate: string;
  @Input('ngName') ngName: string;
  @Input('disabled') disabled: boolean;
  @Input('format') format: string;
  @Input('labelText') label: string;
  @Input('labelClasses') labelClasses: string;

  group_class = 'input-group';
  @Output() valueChange: EventEmitter < any > = new EventEmitter(false);
  private el: HTMLElement;
  constructor(el: ElementRef, public zone: NgZone) {
    this.el = el.nativeElement;
  }

  ngOnChanges(simpleChanges) {
    if (simpleChanges.setDate && simpleChanges.setDate.currentValue) {
      if ($(this.el).find('.date').data('DateTimePicker')) {
        $(this.el).find('.date').data('DateTimePicker').date(moment(simpleChanges.setDate.currentValue));
      }
    } else {
      if ($(this.el).find('.date').data('DateTimePicker')) {

        $(this.el).find('.date').data('DateTimePicker').date(null);
      }
    }
  }

  ngAfterViewInit() {
    if (this.disabled) {
      this.group_class = '';
    }
    $(this.el).find('.date').datetimepicker({
      format: this.format ? this.format : 'MM/DD/YYYY hh:mm A',
    }).on('dp.change', (e) => {
      this.zone.run(() => {
        if (e.date) {
          this.valueChange.emit(moment(e.date).format());
        }
      });
    });

    if (this.setDate) {
      $(this.el).find('.date').data('DateTimePicker').date(moment(this.setDate));
    }
  }

  public sendBlankOnKeyDown() {
    if ($(this.el).find('.date').val() === '') {
      this.valueChange.emit('');
    }
  }


  // From ControlValueAccessor interface
  writeValue(value: any) {
    console.log(value);

  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    console.log(fn);
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    console.log(fn);
  }
}

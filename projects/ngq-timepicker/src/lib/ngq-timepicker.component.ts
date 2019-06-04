/// <reference types="jquery" />
/// <reference types="bootstrap.timepicker" />

import { AfterViewInit, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NGQ_TIMEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqTimepickerComponent),
  multi: true
};

export const BASE_OPTION = {
  defaultTime: false,
  showMeridian: false
} as TimepickerOptions;

@Component({
  selector: 'ngq-timepicker',
  templateUrl: './ngq-timepicker.component.html',
  styles: [],
  providers: [NGQ_TIMEPICKER_VALUE_ACCESSOR]
})
export class NgqTimepickerComponent implements ControlValueAccessor, AfterViewInit {

  jQueryElement: JQuery;
  isDisabled: boolean;
  value: string;

  @Input('opts') opts: TimepickerOptions;
  @ViewChild('input') input: any;

  propagateChange = _ => { };

  writeValue(value: any): void {
    this.value = value;
    if (this.jQueryElement) {
      this.jQueryElement.timepicker('setTime', value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (this.jQueryElement) {
      this.jQueryElement.prop('disabled', this.isDisabled);
    }
  }

  ngAfterViewInit(): void {
    this.jQueryElement = jQuery(this.input.nativeElement);
    this.initTimePicker();
  }

  private initTimePicker() {
    this.opts = this.opts ? this.opts : BASE_OPTION;
    this.jQueryElement.timepicker(this.opts);
    this.jQueryElement.timepicker().on('changeTime.timepicker', (e: any) => {
      setTimeout(() => {
        this.value = e.time.value;
        this.propagateChange(this.value);
      }, 0);
    });
    this.jQueryElement.timepicker('setTime', this.value);
  }

  onChange(value: string) {
    if (!value) {
      this.value = null;
      this.propagateChange(this.value);
    } else {
      if (this.jQueryElement) {
        this.jQueryElement.timepicker('remove');
        this.initTimePicker();
      }
    }
  }

}

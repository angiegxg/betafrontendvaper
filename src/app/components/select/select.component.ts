import { Component, Input, Output, EventEmitter, forwardRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOption } from 'src/app/models/interface.interface';
import {FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone:true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SelectComponent implements ControlValueAccessor {

  @Input() items?: any[];
  
  @Output() selectChange = new EventEmitter<string>();


  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};

  writeValue(value: any): void {
    // Handle the initial value here if needed
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabling the component if needed
  }

  handleSelectChange(event: any): void {
    if (event && event.target) {
      this.onChange(event.target.value);
      this.onTouch();
      this.selectChange.emit(event.target.value);
    }
  }

  
}

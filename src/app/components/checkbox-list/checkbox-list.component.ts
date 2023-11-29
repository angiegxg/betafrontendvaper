import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectOption } from 'src/app/models/interface.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-checkbox-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, 
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckboxListComponent {
  @Input() items!: SelectOption[];
  @Output() flavorIdsChange = new EventEmitter<number[]>();

  constructor(private cdRef: ChangeDetectorRef) {}

  onCheckboxChange(item: SelectOption): void {
    item.checked = !item.checked;
    const selectedIds = this.items.filter((i) => i.checked).map((i) => i.id);
    console.log("Estoy en el componente check", selectedIds);
    this.flavorIdsChange.emit(selectedIds);

  
    this.cdRef.detectChanges();
  }

}

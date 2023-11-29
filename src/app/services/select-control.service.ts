import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectControl } from '../models/interface.interface';

import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectControlService {
  createSelectControl(): FormControl {
    // Lógica para obtener los datos del servicio o cualquier inicialización necesaria
    const selectControl: SelectControl = {
      items: [], // Puedes obtener estos datos desde una API, por ejemplo
      selectedValue: null,
    };

    return new FormControl(selectControl.selectedValue);
  }

 

  selectedValueSubject = new BehaviorSubject<string | undefined>(undefined);
  selectedValue$: Observable<string | undefined> = this.selectedValueSubject.asObservable();

  setSelectedValue(value: string | undefined): void {
    console.log("estoy en el servicio para compartir el id", value)
    this.selectedValueSubject.next(value);
  }
  }




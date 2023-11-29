import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckboxListControl} from '../models/interface.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckboxControlService {

  createCheckboxListControl(): FormControl {
    // Lógica para obtener los datos del servicio o cualquier inicialización necesaria
    const checkboxListControl: CheckboxListControl = {
      items: [], // Puedes obtener estos datos desde una API, por ejemplo
      selectedIds: [],
    };

    return new FormControl(checkboxListControl.selectedIds);
  }
}

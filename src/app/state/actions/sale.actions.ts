import { createAction, props } from '@ngrx/store';
import types from 'src/app/models/interface.interface';

export const loadSales = createAction('[Sale] Load Sales'); // Cambiado el nombre de la acción

export const loadSalesSuccess = createAction(
  '[Sale] Load Sales Success', // Cambiado el nombre de la acción
  props<{ sales: types.Sale[] }>() // Cambiado el nombre de la propiedad
);

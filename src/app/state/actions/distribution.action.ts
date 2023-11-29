import { createAction, props } from '@ngrx/store';
import types from 'src/app/models/interface.interface';

export const loadDistributions = createAction('[Distribution] Load Distributions'); // Cambiado el nombre de la acción

export const loadDistributionsSuccess = createAction(
  '[Distribution] Load Distributions Success', // Cambiado el nombre de la acción
  props<{ distributions: types.DistributionInterface[] }>() // Cambiado el nombre de la propiedad
);


import { createAction, props } from '@ngrx/store';
import types from 'src/app/models/interface.interface';

export const loadFlavors = createAction('[Flavor] Load Flavors');

export const loadFlavorsSuccess = createAction(
  '[Flavor] Load Flavors Success',
  props<{ flavors: types.Flavor[] }>()
);

import { createAction, props } from '@ngrx/store';
import types from 'src/app/models/interface.interface';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: types.Product[] }>()
);

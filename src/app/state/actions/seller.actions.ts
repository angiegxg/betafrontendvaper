import { createAction, props } from "@ngrx/store";
import types from 'src/app/models/interface.interface';

export const loadSellers = createAction('[Seller] Load Sellers');

export const loadSellersSuccess = createAction(
  '[Seller] Load Seller Success',
  props<{ sellers: types.Seller[] }>()
);

export const loadSellerById = createAction(
  '[Seller] Load Seller By Id',
  props<{ id: number }>()
);

export const loadSellerByIdSuccess = createAction(
  '[Seller] Load Seller By Id Success',
  props<{ seller: types.Seller}>()
);


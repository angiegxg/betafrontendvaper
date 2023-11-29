// seller.selector.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sellerAdapter, SellerState } from '../reducers/seller.reducer';
import * as types from "../../models/interface.interface";

export const selectSellerState = createFeatureSelector<SellerState>('sellers');

export const selectAllSellers = createSelector(
  selectSellerState,
  sellerAdapter.getSelectors().selectAll
);

export const selectSelectedSellerId = createSelector(
  selectSellerState,
  (state) => state.selectedSellerId
);



// Ejemplo de cómo usar el selector en tu componente


// sellers.reducer.ts
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as SellerActions from '../actions/seller.actions';
import types from 'src/app/models/interface.interface';

export interface SellerState extends EntityState<types.Seller> {
  selectedSellerId?: types.Seller | null 
}

export const sellerAdapter = createEntityAdapter<types.Seller>();

export const initialSellerState: SellerState = sellerAdapter.getInitialState({
  selectedSellerId: null
});

export const sellerReducer = createReducer(
  initialSellerState,
  on(SellerActions.loadSellersSuccess, (state, { sellers }) => {
    console.log('Reducer - Vendedores cargados exitosamente:', sellers);
    return sellerAdapter.setAll(sellers, state);
  }),

  on(SellerActions.loadSellerByIdSuccess, (state, { seller }) => {
    console.log('Reducer - Vendedor cargado exitosamente por ID:', seller);
    return { ...state, selectedSellerId: seller};
  })
);



import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as SaleActions from '../actions/sale.actions'; // Cambiado el nombre del archivo de acciones
import types from 'src/app/models/interface.interface';

export interface SaleState extends EntityState<types.Sale> {} // Cambiado el nombre de la interfaz

export const SaleAdapter = createEntityAdapter<types.Sale>();

export const initialSaleState: SaleState = SaleAdapter.getInitialState(); // Cambiado el nombre del estado inicial

export const SaleReducer = createReducer(
  initialSaleState,
  on(SaleActions.loadSalesSuccess, (state, { sales }) => { // Cambiado el nombre de la acción
    console.log('Reducer - Sale cargado exitosamente:', sales);
    return SaleAdapter.setAll(sales, state);
  })
);

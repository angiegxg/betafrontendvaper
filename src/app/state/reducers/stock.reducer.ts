import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as StockActions from '../actions/stock.actions'; // Cambiado el nombre del archivo de acciones
import types from 'src/app/models/interface.interface';

export interface StockState extends EntityState<types.Stock> {} // Cambiado el nombre de la interfaz

export const StockAdapter = createEntityAdapter<types.Stock>();

export const initialStockState: StockState = StockAdapter.getInitialState(); // Cambiado el nombre del estado inicial

export const StockReducer = createReducer(
  initialStockState,
  on(StockActions.loadStocksSuccess, (state, { stocks }) => { // Cambiado el nombre de la acción
    console.log('Reducer - Stock cargado exitosamente:', stocks);
    return StockAdapter.setAll(stocks, state);
  })
);

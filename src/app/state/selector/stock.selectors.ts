import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStock from '../reducers/stock.reducer'; // Cambiado el nombre del archivo del reducer
// import types from 'src/app/models/interface.interface';

// Selecciona el estado de la entidad 'stock'
export const selectStockState = createFeatureSelector<fromStock.StockState>('stocks'); // Cambiado el nombre del estado

// Obtén el adapter de la entidad 'stock'
const { selectAll } = fromStock.StockAdapter.getSelectors(); // Cambiado el nombre del adapter

// Selector para obtener todos los productos
export const selectAllStock = createSelector(selectStockState, (state) => {
    console.log('Seleccionando todo el stock desde el estado:', state);
    return selectAll(state);
});

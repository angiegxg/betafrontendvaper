import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSale from '../reducers/sale.reducer'; // Cambiado el nombre del archivo del reducer
// import types from 'src/app/models/interface.interface';

// Selecciona el estado de la entidad 'sale' // Cambiado el nombre de la entidad
export const selectSaleState = createFeatureSelector<fromSale.SaleState>('sales'); // Cambiado el nombre del estado

// Obtén el adapter de la entidad 'sale' // Cambiado el nombre de la entidad
const { selectAll } = fromSale.SaleAdapter.getSelectors(); // Cambiado el nombre del adapter

// Selector para obtener todos las ventas // Cambiado el nombre de la entidad
export const selectAllSales = createSelector(selectSaleState, (state) => {
    console.log('Seleccionando todo el stock desde el estado:', state);
    return selectAll(state);
});

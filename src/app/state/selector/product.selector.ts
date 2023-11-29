import { createFeatureSelector, createSelector } from '@ngrx/store';
// import types from 'src/app/models/interface.interface';
import * as fromProduct from '../reducers/product.reducer';

// Selecciona el estado de la entidad 'flavor'
export const selectProductState = createFeatureSelector<fromProduct.ProducState>('products');

// Obtén el adapter de la entidad 'flavor'
const { selectAll } = fromProduct.ProductAdapter.getSelectors();

// Selector para obtener todos los sabores
// export const selectAllFlavors = createSelector(selectFlavorState, selectAll);

export const selectAllProduct = createSelector(selectProductState, (state) => {
    console.log('Seleccionando todos los productos desde el estado:', state);
    return selectAll(state);
  });

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import types from 'src/app/models/interface.interface';

export interface ProducState extends EntityState<types.Product> {}

export const ProductAdapter = createEntityAdapter<types.Product>();

export const initialProductState: ProducState = ProductAdapter.getInitialState();

export const ProductReducer = createReducer(
    initialProductState,
    on(ProductActions.loadProductsSuccess, (state, { products }) => {
      console.log('Reducer - Productos cargados exitosamente:', products);
      return ProductAdapter.setAll(products, state);
    })
);
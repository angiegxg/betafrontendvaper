import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as ProductActions from '../actions/product.actions';
import { ProductService } from '../services/product.services';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>{
        console.log('Efecto de carga de productos activado...');
        return this.productService.getAllProducts().pipe(
          map((products) => {
            console.log('productos cargados exitosamente:', products);
            return ProductActions.loadProductsSuccess({ products })}),
          catchError(() => EMPTY)
        )}
      )
    )
  );
 

  constructor(private actions$: Actions, private productService: ProductService) {}
}

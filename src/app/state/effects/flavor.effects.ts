import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as FlavorActions from '../actions/flavor.actions';
import { FlavorService } from '../services/flavor.services';

@Injectable()
export class FlavorEffects {
  loadFlavors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlavorActions.loadFlavors),
      mergeMap(() =>{
        console.log('Efecto de carga de sabores activado...');
        return this.flavorService.getFlavors().pipe(
          map((flavors) => {
            console.log('Sabores cargados exitosamente:', flavors);
            return FlavorActions.loadFlavorsSuccess({ flavors })}),
          catchError(() => EMPTY)
        )}
      )
    )
  );
 

  constructor(private actions$: Actions, private flavorService: FlavorService) {}
}

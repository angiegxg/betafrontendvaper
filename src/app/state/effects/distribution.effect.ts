import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as DistributionActions from '../actions/distribution.action'; // Cambiado a DistributionActions
import { DistributionService } from '../services/distribution.services'; // Cambiado a DistributionService

@Injectable()
export class DistributionEffects {
  loadDistribution$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DistributionActions.loadDistributions), // Cambiado a loadDistributions
      mergeMap(() => {
        console.log('Efecto de carga de distribution activado...'); // Cambiado a distribution
        return this.distributionService.getAllDistribution().pipe( // Cambiado a distributionService
          map((distributions) => {
            console.log('Distribution cargada exitosamente:', distributions); // Cambiado a distribution
            return DistributionActions.loadDistributionsSuccess({ distributions }); // Cambiado a loadDistributionsSuccess
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private distributionService: DistributionService) {} // Cambiado a distributionService
}

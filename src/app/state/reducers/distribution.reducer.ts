import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as DistributionActions from '../actions/distribution.action'; // Cambiado el nombre del archivo de acciones
import types from 'src/app/models/interface.interface';

export interface DistributionState extends EntityState<types.Distribution> {} // Cambiado el nombre de la interfaz

export const DistributionAdapter = createEntityAdapter<types.Distribution>();

export const initialDistributionState: DistributionState = DistributionAdapter.getInitialState(); // Cambiado el nombre del estado inicial

export const DistributionReducer = createReducer(
  initialDistributionState,
  on(DistributionActions.loadDistributionsSuccess, (state, { distributions }) => { // Cambiado el nombre de la acción
    console.log('Reducer - Distribution cargada exitosamente:', distributions);
    return DistributionAdapter.setAll(distributions, state);
  })
);

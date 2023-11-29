import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDistribution from '../reducers/distribution.reducer'; // Cambiado el nombre del archivo del reducer
// import types from 'src/app/models/interface.interface';

// Selecciona el estado de la entidad 'distribution'
export const selectDistributionState = createFeatureSelector<fromDistribution.DistributionState>('distributions'); // Cambiado el nombre del estado

// Obtén el adapter de la entidad 'distribution'
const { selectAll } = fromDistribution.DistributionAdapter.getSelectors(); // Cambiado el nombre del adapter

// Selector para obtener todas las distribuciones
export const selectAllDistribution = createSelector(selectDistributionState, (state) => {
    console.log('Seleccionando todas las distribuciones desde el estado:', state);
    return selectAll(state);
});

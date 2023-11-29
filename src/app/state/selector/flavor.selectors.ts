// flavor.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
// import types from 'src/app/models/interface.interface';
import * as fromFlavor from '../reducers/flavor.reducer';

// Selecciona el estado de la entidad 'flavor'
export const selectFlavorState = createFeatureSelector<fromFlavor.FlavorState>('flavors');

// Obtén el adapter de la entidad 'flavor'
const { selectAll } = fromFlavor.flavorAdapter.getSelectors();

// Selector para obtener todos los sabores
// export const selectAllFlavors = createSelector(selectFlavorState, selectAll);

export const selectAllFlavors = createSelector(selectFlavorState, (state) => {
    console.log('Seleccionando todos los sabores desde el estado:', state);
    return selectAll(state);
  });

// Selector para obtener un sabor por ID
// export const selectFlavorById = (flavorId: number) =>
//   createSelector(selectAllFlavors, (flavors: types.Flavor[]) => flavors.find((flavor) => flavor.id === flavorId));

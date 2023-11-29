
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as FlavorActions from '../actions/flavor.actions';
import types from 'src/app/models/interface.interface';

export interface FlavorState extends EntityState<types.Flavor> {}

export const flavorAdapter = createEntityAdapter<types.Flavor>();

export const initialFlavorState: FlavorState = flavorAdapter.getInitialState();

export const flavorReducer = createReducer(
  initialFlavorState,
  on(FlavorActions.loadFlavorsSuccess, (state, { flavors }) => flavorAdapter.setAll(flavors, state))
);

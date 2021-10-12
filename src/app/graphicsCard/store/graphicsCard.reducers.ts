
import { cardsActionTypes } from './graphicsCard.actions';
import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { GraphicsCard } from '../models/graphics-card';

export interface CardsState extends EntityState<GraphicsCard> {
  cardsLoaded: boolean;
}

export const adapter: EntityAdapter<GraphicsCard> = createEntityAdapter<GraphicsCard>();

export const initialState = adapter.getInitialState({
  cardsLoaded: false
});

export const cardsReducer = createReducer(
  initialState,

  on(cardsActionTypes.cardsLoaded, (state, action) => {
    
    return adapter.addMany(
      action.cards,
      {...state, cardsLoaded: true}
    );
  }),

);

export const { selectAll } = adapter.getSelectors();

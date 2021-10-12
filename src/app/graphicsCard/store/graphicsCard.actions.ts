
import { createAction, props } from '@ngrx/store';
import { GraphicsCard } from '../models/graphics-card';


export const loadCards = createAction(
  '[Cards List] Load Cards via Service',
);

export const cardsLoaded = createAction(
  '[Cards Effect] Cards Loaded Successfully',
  props<{cards: GraphicsCard[]}>()
);

export const cardsActionTypes = {
  loadCards,
  cardsLoaded,
  
};



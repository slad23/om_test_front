import { CardsState } from './graphicsCard.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll,} from './graphicsCard.reducers';

export const cardsFeatureSelector = createFeatureSelector<CardsState>('cards');

export const getAllCards = createSelector(
    cardsFeatureSelector,
  selectAll
);

export const areCardsLoaded = createSelector(
    cardsFeatureSelector,
  state => state.cardsLoaded
);




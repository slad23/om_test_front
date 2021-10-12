import { AppState } from './../store/reducers/index';
import { areCardsLoaded } from './store/graphicsCard.selectors';
import {filter, first, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { loadCards } from './store/graphicsCard.actions';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import {select, Store} from '@ngrx/store';

@Injectable()
export class GraphicsCardResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(): Observable<any> {
    return this.store
    .pipe(
        select(areCardsLoaded),
        tap((cardsLoaded) => {
          if (!cardsLoaded) {
            this.store.dispatch(loadCards());
          }

        }),
        filter(cardsLoaded => cardsLoaded),
        first()
    );
  }
}

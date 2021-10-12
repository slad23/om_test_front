import { cardsActionTypes } from './graphicsCard.actions';
import { concatMap, map } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { GraphicsCardService } from '../service/graphics-card.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CardsEffects {

  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cardsActionTypes.loadCards),
      concatMap(() => this.cardsService.getAllCards()),
      map(cards => cardsActionTypes.cardsLoaded({cards}))
    )
  );

  constructor(private cardsService: GraphicsCardService, private actions$: Actions, private router: Router) {}
}

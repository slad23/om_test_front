import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './components/cards.component';
import { CardsEffects } from './store/graphicsCard.effects';
import { cardsReducer } from './store/graphicsCard.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { GraphicsCardDetailComponent } from './graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsCardRoutingModule } from './graphics-card- routing.module';
import { ImagePipe } from './pipes/image.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from '../shared/material/material.module';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    CardsComponent,
    GraphicsCardDetailComponent,
    GraphicsCardListContainerComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CardsEffects]),
    FlexLayoutModule,
    FormsModule,
    GraphicsCardRoutingModule,
    InfiniteScrollModule,
    MaterialModule,
    StoreModule.forFeature('cards', cardsReducer)
  ],
  exports: [GraphicsCardListContainerComponent]
})
export class GraphicsCardModule { }

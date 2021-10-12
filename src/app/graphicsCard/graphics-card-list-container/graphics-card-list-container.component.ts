import { AppState } from 'src/app/store/reducers';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { getAllCards } from '../store/graphicsCard.selectors';
import { GraphicsCard } from '../models/graphics-card';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./graphics-card-list-container.component.css'],

})

export class GraphicsCardListContainerComponent implements OnInit {

  term: any;
  filteredData: GraphicsCard[] | undefined;
  cards$!: Observable<GraphicsCard[]>;
  cards: GraphicsCard[] = [];

  constructor(private store: Store<AppState>,) { }

  getData() {

    this.cards$ = this.store.select(getAllCards);
    this.cards$.subscribe(data => {
    this.cards.push(...data)

    })

  }

  ngOnInit(): void {
    this.getData()
  }

  onScrollDown(ev: any) {
    this.getData();
  }

}

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GraphicsCard } from '../models/graphics-card';
import { GraphicsCardService } from '../service/graphics-card.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.css']
})
export class GraphicsCardDetailComponent implements OnInit {

  card!: GraphicsCard ;

  constructor( private activatedRoute: ActivatedRoute,
              private graphicsCardService : GraphicsCardService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.graphicsCardService.getCardById(id))
      )
      .subscribe( card => this.card = card)
  }

}

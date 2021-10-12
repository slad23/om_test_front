import { Component, Input } from '@angular/core';
import { GraphicsCard } from '../models/graphics-card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class CardsComponent{

  @Input() card!: GraphicsCard;

}

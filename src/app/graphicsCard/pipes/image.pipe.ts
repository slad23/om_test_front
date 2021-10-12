import { GraphicsCard } from '../models/graphics-card';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( card: GraphicsCard) : string {
    return `assets/img/${ card.id }.jpg`;
  }


}

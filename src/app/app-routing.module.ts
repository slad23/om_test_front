import { NgModule } from '@angular/core';
import { GraphicsCardResolver } from './graphicsCard/graphicsCard.resolver';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graphics-cards',
    loadChildren: () => import('./graphicsCard/graphics-card.module').then(m => m.GraphicsCardModule),
    resolve: {
      graphicsCard : GraphicsCardResolver
    }
  },
  {
    path: '**',
    redirectTo: 'graphics-cards'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[GraphicsCardResolver]
})
export class AppRoutingModule { }

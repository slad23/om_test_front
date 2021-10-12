import { GraphicsCardDetailComponent } from './graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container/graphics-card-list-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path: '',
    component: GraphicsCardListContainerComponent,
  },
  {
    path: ':id',
    component : GraphicsCardDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ],
})
export class GraphicsCardRoutingModule { }

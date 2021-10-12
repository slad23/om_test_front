import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SpinnerComponent
  ]
})
export class SharedModule { }

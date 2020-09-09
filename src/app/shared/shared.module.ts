import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevationDirective } from '../shared/elevation.directive';


@NgModule({
  declarations: [
    ElevationDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ElevationDirective,
    CommonModule,
  ]
})
export class SharedModule { }

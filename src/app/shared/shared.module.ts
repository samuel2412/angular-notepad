import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { ElevationDirective } from '../shared/elevation.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component'


@NgModule({
  declarations: [
    ElevationDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  exports:[
    ElevationDirective,
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    AlertModule,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }

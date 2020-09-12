import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { ElevationDirective } from '../shared/elevation.directive';


@NgModule({
  declarations: [
    ElevationDirective
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
    AlertModule
  ]
})
export class SharedModule { }

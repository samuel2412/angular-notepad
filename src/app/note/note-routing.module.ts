import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { NoteComponent } from './note.component'
import { AuthGuard } from '../auth/auth.guard'


const routes: Routes = [
  {
    path:'',
    component: NoteComponent,
    canActivate: [ AuthGuard ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class NoteRoutingModule { }

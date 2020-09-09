import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { NoteListComponent } from './note-list/note-list.component'


const routes: Routes = [
  {
    path:'',
    component: NoteListComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class NoteRoutingModule { }

import { NgModule } from '@angular/core';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-item/note-item.component'
import { NoteRoutingModule } from './note-routing.module';


@NgModule({
  imports: [
    NoteRoutingModule
  ],
  exports: [],
  declarations: [
    NoteListComponent,
    NoteItemComponent,
  ],
  providers: [],
})
export class NoteModule { }

import { NgModule } from '@angular/core';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-item/note-item.component'
import { NoteRoutingModule } from './note-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NoteEditComponent } from './note-edit/note-edit.component';


@NgModule({
  imports: [
    NoteRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    NoteListComponent,
    NoteItemComponent,
    NoteEditComponent,
  ],
  providers: [],
})
export class NoteModule { }

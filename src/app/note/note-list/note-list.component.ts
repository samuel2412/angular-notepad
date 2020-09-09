import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'

import { Note } from '../../shared/note.model'
import * as NoteActions from '../store/note.actions'
import * as fromApp from '../../store/app.reducer'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, OnDestroy {
  notes: Note[] = []
  storeSub: Subscription

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('note')
    .pipe(
      map(noteState => noteState.notes)
    ).subscribe(notes =>{
      this.notes = notes
    })
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe()
  }

  onAddNote(){
    this.store.dispatch( new NoteActions.AddNote(new Note(
      `aaaa`,
      `bbbb`,
      new Date(),
      new Date()
    )) )
  }
}

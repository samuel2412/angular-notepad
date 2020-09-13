import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Note } from '../../shared/note.model'
import * as fromApp from '../../store/app.reducer'
import * as NoteActions from '../store/note.actions'
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, OnDestroy {
  notes: Note[] = []
  loading: boolean
  storeSub: Subscription

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch( new  NoteActions.FetchNotes ) 
    this.storeSub = this.store.select('note').subscribe(noteState =>{
      this.loading = noteState.loading
      this.notes = noteState.notes
    })
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe()
  }
}

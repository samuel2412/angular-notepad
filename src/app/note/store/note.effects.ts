import { Actions, Effect, ofType } from '@ngrx/effects'
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';

import * as NoteActions from './note.actions'
import {Note} from '../../shared/note.model'
import * as fromApp from '../../store/app.reducer'
import { NoteService } from '../note.service'


@Injectable()
  export class NoteEffects {
    constructor(private actions$: Actions, private store: Store<fromApp.AppState>, private noteService: NoteService){}

    @Effect()
    fetchNotes = this.actions$.pipe(
      ofType(NoteActions.FETCH_NOTES),
      switchMap(()=>{
        return this.noteService.fetchNotes()
      }),
      map((response: Note[]) => {
       const notes: Note[] =[]
       Object.keys(response).map(key => {
          notes.push(
            new Note(
              response[key].title,
              response[key].text,
              response[key].createdAt,
              response[key].editedAt,
            )
          )
       })
       return notes
      }),
      map(notes => {
        return new NoteActions.SetNotes(notes)
      })
    )

    @Effect()
    addNotes = this.actions$.pipe(
      ofType(NoteActions.ADD_NOTE_START),
      switchMap((action: NoteActions.AddNoteStart)=>{
        return this.noteService.saveNote(action.payload).pipe(
          map(() => {
            return new NoteActions.AddNote(action.payload)
          })
        )
      })
    )

  }
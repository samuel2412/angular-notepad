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
       if(response !== null){
        Object.keys(response).map(key => {
            notes.push(
              new Note(
                response[key].title,
                response[key].text,
                response[key].createdAt,
                response[key].editedAt,
                key
              )
            )
        })
      }
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
          map((response: {name:string}) => {
            const {title, text, createdAt, editedAt} = action.payload
            return new NoteActions.AddNote( new Note(title,text,createdAt,editedAt,response.name) )
          })
        )
      })
    )

    @Effect()
    updateNote = this.actions$.pipe(
      ofType(NoteActions.UPDATE_NOTE_START),
      switchMap((action: NoteActions.UpdateNoteStart) => {
        return this.noteService.updateNote(action.payload.note).pipe(
          map(()=>{
            const {title, text, createdAt, editedAt} = action.payload.note
            return new NoteActions.UpdateNote( {note: new Note(title, text,createdAt,editedAt), index: action.payload.index} )
          })
        )
      })
    )

    @Effect()
    deleteNote = this.actions$.pipe(
      ofType(NoteActions.DELETE_NOTE_START),
      switchMap((action: NoteActions.DeleteNoteStart)=>{
        return this.noteService.deleteNote(action.payload.id).pipe(
          map(()=>{
            return new NoteActions.DeleteNote(action.payload.index)
          })
        )
      })
    )

  }
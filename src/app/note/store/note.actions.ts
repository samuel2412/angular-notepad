import { Action } from '@ngrx/store'

import { Note } from '../../shared/note.model'

export const FETCH_NOTES = '[Note] Fetch Notes'
export const SET_NOTES = '[Note] Set Notes'
export const ADD_NOTE_START = '[Note] Add Note Start'
export const ADD_NOTE = '[Note] Add Note'
export const UPDATE_NOTE_START = '[Note] Update Note Start'
export const UPDATE_NOTE = '[Note] Update Note'
export const DELETE_NOTE_START = '[Note] Delete Note Start'
export const DELETE_NOTE = '[Note] Delete Note'

export class FetchNotes implements Action {
  readonly type = FETCH_NOTES
}

export class SetNotes implements Action {
  readonly type = SET_NOTES
  constructor(public payload: Note[]){}
}

export class AddNote implements Action {
  readonly type = ADD_NOTE
  constructor(public payload: Note){}
}

export class AddNoteStart implements Action {
  readonly type = ADD_NOTE_START
  constructor(public payload: Note){}
}

export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE
  constructor(public payload: {note: Note, index: number}){}
}

export class UpdateNoteStart implements Action {
  readonly type = UPDATE_NOTE_START
  constructor(public payload: {note: Note, index: number}){}
}

export class DeleteNote implements Action {
  readonly type = DELETE_NOTE
  constructor(public payload: number){}
}

export class DeleteNoteStart implements Action {
  readonly type = DELETE_NOTE_START
  constructor(public payload: {index:number, id: string}){}
}

export type AppActions =
| FetchNotes
| SetNotes
| AddNoteStart
| AddNote
| UpdateNote
| UpdateNoteStart
| DeleteNoteStart
| DeleteNote
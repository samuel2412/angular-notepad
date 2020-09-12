import { Action } from '@ngrx/store'

import { Note } from '../../shared/note.model'


export const ADD_NOTE = '[Note] Add Note'
export const UPDATE_NOTE = '[Note] Update Note'

export class AddNote implements Action {
  readonly type = ADD_NOTE
  constructor(public payload: Note){}
}

export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE
  constructor(public payload: {note: Note, index: number}){}
}

export type AppActions =
| AddNote
| UpdateNote
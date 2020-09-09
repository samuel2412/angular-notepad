import { Action } from '@ngrx/store'

import { Note } from '../../shared/note.model'


export const ADD_NOTE = '[App] Add Note'

export class AddNote implements Action {
  readonly type = ADD_NOTE
  constructor(public payload: Note){}
}

export type AppActions =
| AddNote
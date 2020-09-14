import * as fromNote from '../note/store/note.reducer'
import * as fromAuth from '../auth/store/auth.reducer'

import { ActionReducerMap } from '@ngrx/store'

export interface AppState{
  note: fromNote.State,
  auth: fromAuth.State
}


export const appReducer: ActionReducerMap<AppState> = {
  note: fromNote.noteReducer,
  auth: fromAuth.authReducer
}

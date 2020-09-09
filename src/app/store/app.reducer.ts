import * as fromNote from '../note/store/note.reducer'

import { ActionReducerMap } from '@ngrx/store'

export interface AppState{
  note: fromNote.State,
}


export const appReducer: ActionReducerMap<AppState> = {
  note: fromNote.noteReducer,
}

import { Note } from '../../shared/note.model'

import * as AppActions from './note.actions'

export interface State {
  notes: Note[]
}

const initalState: State = {
  notes: []
}

const noteReducer = (state = initalState, action: AppActions.AppActions) =>{
  switch (action.type) {
    case AppActions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
   
    default:
      return state
  }
}

export { noteReducer }
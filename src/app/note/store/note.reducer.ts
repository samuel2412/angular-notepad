import { Note } from '../../shared/note.model'

import * as AppActions from './note.actions'

export interface State {
  notes: Note[]
}

const initalState: State = {
  notes: [
    new Note(
      `Nota hardcoded`,
      `asdasddddddddddddddddddd2133 asdasddddddddddddddddddd2133 asdasddddddddddddddddddd2133 asdasddddddddddddddddddd2133 asdasddddddddddddddddddd2133 asdasddddddddddddddddddd2133`,
      new Date(),
      new Date(),
    )
  ]
}

const noteReducer = (state = initalState, action: AppActions.AppActions) =>{
  switch (action.type) {
    case AppActions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }

    case AppActions.UPDATE_NOTE:
      const updatedNote = {...state.notes[action.payload.index], ...action.payload.note}
      const updatedNotes = [...state.notes]
      updatedNotes[action.payload.index] = updatedNote
      return {
        ...state,
        notes: updatedNotes
      }
   
    default:
      return state
  }
}

export { noteReducer }
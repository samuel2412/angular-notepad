import { Note } from '../../shared/note.model'

import * as AppActions from './note.actions'

export interface State {
  notes: Note[],
  loading: boolean
}

const initalState: State = {
  notes: [],
  loading: false,
}

const noteReducer = (state = initalState, action: AppActions.AppActions) =>{
  switch (action.type) {
    case AppActions.FETCH_NOTES:
      return{
        ...state,
        loading: true
      }
    case AppActions.SET_NOTES:
      return {
        ...state,
        notes: [...action.payload],
        loading: false
      }

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

    case AppActions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((el,index) => index !== action.payload)
      }
   
    default:
      return state
  }
}

export { noteReducer }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Note } from '../shared/note.model';


@Injectable({providedIn: 'root'})
export class NoteService {
  baseUrl: string = 'https://angular-notepad-40968.firebaseio.com'
  constructor(private http: HttpClient) { }

  fetchNotes():Observable<Note[]>{
    return this.http.get<Note[]>(`${this.baseUrl}/notes.json`)
  }

  saveNote(note: Note){
    return this.http.post(`${this.baseUrl}/notes.json`,note)
  }

  updateNote(note: Note){
    const {title, text, createdAt, editedAt} = note
    return this.http.put(`${this.baseUrl}/notes/${note.id}.json`,{ title, text, createdAt, editedAt })
  }

  deleteNote(id: string){
    return this.http.delete(`${this.baseUrl}/notes/${id}.json`)
  }
  
}
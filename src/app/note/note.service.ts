import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Note } from '../shared/note.model';
import { environment } from '../../environments/environment'


@Injectable({providedIn: 'root'})
export class NoteService {
  constructor(private http: HttpClient) { }

  fetchNotes():Observable<Note[]>{
    return this.http.get<Note[]>(`${environment.baseUrl}/notes.json`)
  }

  saveNote(note: Note){
    return this.http.post(`${environment.baseUrl}/notes.json`,note)
  }

  updateNote(note: Note){
    const {title, text, createdAt, editedAt} = note
    return this.http.put(`${environment.baseUrl}/notes/${note.id}.json`,{ title, text, createdAt, editedAt })
  }

  deleteNote(id: string){
    return this.http.delete(`${environment.baseUrl}/notes/${id}.json`)
  }
  
}
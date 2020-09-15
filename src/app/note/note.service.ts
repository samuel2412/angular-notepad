import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Note } from '../shared/note.model';
import { environment } from '../../environments/environment'


@Injectable({providedIn: 'root'})
export class NoteService {
  constructor(private http: HttpClient) { }

  fetchNotes():Observable<Note[]>{
    const user = JSON.parse(localStorage.getItem('userData'))
    return this.http.get<Note[]>(`${environment.baseUrl}/notes/${user.id}.json`)
  }

  saveNote(note: Note){
    const user = JSON.parse(localStorage.getItem('userData'))
    return this.http.post(`${environment.baseUrl}/notes/${user.id}.json`,note)
  }

  updateNote(note: Note){
    const user = JSON.parse(localStorage.getItem('userData'))
    const {title, text, createdAt, editedAt} = note
    return this.http.put(`${environment.baseUrl}/notes/${user.id}/${note.id}.json`,{ title, text, createdAt, editedAt })
  }

  deleteNote(id: string){
    const user = JSON.parse(localStorage.getItem('userData'))
    return this.http.delete(`${environment.baseUrl}/notes/${user.id}/${id}.json`)
  }
  
}
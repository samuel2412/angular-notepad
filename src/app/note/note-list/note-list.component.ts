import { Component, OnInit } from '@angular/core';

import { Note } from '../../shared/note.model'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = []

  constructor() { }

  ngOnInit(): void {
    for(let i =0; i < 5; i++){
      this.notes.push(
        new Note(
          `Nota ${i}`,
          `Texto daora da nota ${i}`,
          new Date(),
          new Date()
        )
      )
    }
  }
}

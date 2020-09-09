import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../../shared/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note

  constructor() { }

  ngOnInit(): void {
  }

}

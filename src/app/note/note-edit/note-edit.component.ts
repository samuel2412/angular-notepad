import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note } from '../../shared/note.model'
import * as NoteActions from '../store/note.actions'
import * as fromApp from '../../store/app.reducer'

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit{
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  form: FormGroup
  formNote: Note = new Note(``,``, null, null)
  @Input() note: Note;
  @Input() index: number
  isEdit:boolean
  constructor(private store: Store<fromApp.AppState>,private modalService: BsModalService) {}

  ngOnInit(): void {
    this.isEdit = this.index !== undefined
    if(this.isEdit){
      this.formNote = {...this.note}
    }
    this.form = new FormGroup({
      title: new FormControl(this.formNote.title, [Validators.required, Validators.maxLength(50)]),
      text: new FormControl(this.formNote.text,[Validators.required, Validators.maxLength(200)])
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  get title(){
    return this.form.get('title')
  }
  get text(){
    return this.form.get('text')
  }

  onAddNote(){
    const {title, text} = this.form.value
    if(this.isEdit){
      this.store.dispatch( new NoteActions.UpdateNoteStart(
          {
          note: new Note(
            title,
            text,
            this.note.createdAt,
            new Date(),
            this.note.id
          ),
          index: this.index
        }
      ) )
    } else {
      this.store.dispatch( new NoteActions.AddNoteStart(new Note(
        title,
        text,
        new Date(),
        new Date()
      )) )
    }
    this.onCloseModal()
  }

  onDeleteNote(){
    if( confirm('You really want to delete this note?') ){
      const payload = {
        index: this.index,
        id: this.note.id
      }
      this.store.dispatch( new NoteActions.DeleteNoteStart(payload) )
    }
  }

  onCloseModal(){
    this.modalRef.hide()
    this.form.reset()
  }
}

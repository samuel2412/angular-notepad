import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Note } from '../../shared/note.model'
import * as NoteActions from '../store/note.actions'
import * as fromApp from '../../store/app.reducer'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit, OnDestroy {
  notes: Note[] = []
  storeSub: Subscription
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  form: FormGroup
  formNote: Note = new Note(``,``, null, null)

  constructor(private store: Store<fromApp.AppState>,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('note')
    .pipe(
      map(noteState => noteState.notes)
    ).subscribe(notes =>{
      this.notes = notes
    })
    this.form = new FormGroup({
      title: new FormControl(this.formNote.title, [Validators.required, Validators.maxLength(50)]),
      text: new FormControl(this.formNote.text,[Validators.required, Validators.maxLength(200)])
    })
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe()
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
    this.store.dispatch( new NoteActions.AddNote(new Note(
      title,
      text,
      new Date(),
      new Date()
    )) )
    this.onCloseModal()
  }

  onCloseModal(){
    this.modalRef.hide()
    this.form.reset()
  }
}

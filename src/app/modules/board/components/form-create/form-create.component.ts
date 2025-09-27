import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskRequest } from '../../models/request/taskRequest';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent {
  @Input()
  isOpen:boolean = false

  @Output()
  onCloseForm = new EventEmitter<void>()

  @Output()
  CreateTask = new EventEmitter<TaskRequest>

  constructor(private fb:FormBuilder){

  }

  closeForm(){
    this.onCloseForm.emit()
  }

  formCreate= this.fb.group({
    "title": ["tarea",[Validators.required]],
    "description":["nueva tarea",[Validators.required]],
    "status":["TODO",[Validators.required]]
  })

  createTask(){
    const {title,description,status} = this.formCreate.value
    this.CreateTask.emit({
      title:title||"",
      description: description||"",
      status: status||""
    })
    this.closeForm()
    this.resetForm()
  }

  resetForm(){
    this.formCreate.reset({title:"tarea",description:"nueva tarea",status:"TODO"})
  }

}

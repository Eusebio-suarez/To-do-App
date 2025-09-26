import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb:FormBuilder){

  }

  closeForm(){
    this.onCloseForm.emit()
  }

  formCreate= this.fb.group({
    "title": ["",[Validators.required]],
    "description":["",[Validators.required]],
    "status":["",[Validators.required]]
  })

  createTask(){
    console.log(this.formCreate.value)  
  }

}

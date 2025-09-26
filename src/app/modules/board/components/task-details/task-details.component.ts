import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { TaskResponse } from '../../models/response/taskResponse';
import { FormBuilder, Validators } from '@angular/forms';
import { OnChanges } from '@angular/core';
import { TaskRequest } from '../../models/request/taskRequest';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnChanges {

  @Input()
  task:TaskResponse|null = null

  @Input()
  isOpen:boolean = false

  @Output()
  close = new EventEmitter<void>()

  @Output()
  updateTask = new EventEmitter<{id: number, data:TaskRequest}>()

  @Output()
  deleteTask = new EventEmitter<{id:number}>()



  constructor(private fb:FormBuilder){

  }

  formUpdate = this.fb.group({
    "title": ["",[Validators.required]],
    "description" : ["",[Validators.required]],
    "status":["",[Validators.required]]
  }) 

  //se ejecuta cada que detecta cambios en las propiedades de entrada
  ngOnChanges(changes:SimpleChanges){

    this.formUpdate.patchValue({
      title:this.task?.title,
      description:this.task?.description,
      status:this.task?.status
    })
    
  }

  closeModal(){
    this.close.emit()
  }

handlerSubmit() {
    if (this.task) {
      const { title, description, status } = this.formUpdate.value;
      this.updateTask.emit({
        id: this.task.id,
        data: {
          title: title ?? '',
          description: description ?? '',
          status: status ?? ''
        }
      });
    }
  }

handlerDeleted(){
  this.deleteTask.emit({id:this.task?.id||0})
  this.closeModal()
}

}
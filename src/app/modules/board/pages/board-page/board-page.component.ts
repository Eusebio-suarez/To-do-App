import { Component, OnInit } from '@angular/core';
import { TaskResponse } from '../../models/response/taskResponse';
import { TasksService } from '../../services/tasks.service';
import { TaskRequest } from '../../models/request/taskRequest';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit {
  tasks: TaskResponse[] = []

  selectedTask: TaskResponse | null = null 

  isOpenModal: boolean = false

  constructor(
    private taskService:TasksService,
    private toastr:ToastrService
  ){

  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.taskService.getTasks().subscribe({
      next:(response)=>{
        this.tasks= response.data
        console.log(this.tasks)
      },
      error(e) {
        console.log(e.error.message)
      },
    })
  }

  getFilterTasks(status:string ){
    return this.tasks.filter(task => task.status == status)
  }

  selectTask(task:TaskResponse){
    this.selectedTask = task
    this.isOpenModal = true
  }

  closeModal(){
    this.isOpenModal=false
  }

  onUpdateTask( event:{id:number,data:TaskRequest}){
    this.taskService.updateTask(event.id,event.data).subscribe({
      next:(response)=>{
        this.toastr.success(response.message,"Éxito")
        this.getTasks()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
    this.closeModal()
  }

  onDeleteTask(event:{id:number}){
    this.taskService.deleteTask(event.id).subscribe({
      next:(response)=>{
        this.toastr.success(response.message,"Éxito")
        this.getTasks()
      },
      error:(e)=>{
        this.toastr.error(e.error.message||"error al eliminar la tarea","Error")
      }
    })
  }
}

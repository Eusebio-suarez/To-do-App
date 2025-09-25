import { Component, OnInit } from '@angular/core';
import { TaskResponse } from '../../models/response/taskResponse';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit {
  tasks: TaskResponse[] = []

  constructor(private taskService:TasksService){

  }

  ngOnInit(): void {
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
}

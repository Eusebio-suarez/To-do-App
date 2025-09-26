import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskResponse } from '../models/response/taskResponse';
import { ApiResponse } from '../../auth/models/response/apiResponse';
import { TaskRequest } from '../models/request/taskRequest';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  readonly API_URL = "http://localhost:8080/api/v1/tasks"

  readonly API_URL_UPDATE = "http://localhost:8080/api/v1/tasks/update?id="

  readonly API_URL_DELETE = "http://localhost:8080/api/v1/tasks/delete?id="

  readonly token = localStorage.getItem("Authorization")||""

  readonly headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": this.token
    })

  constructor(private http:HttpClient) {}

  getTasks():Observable<ApiResponse<TaskResponse[]>>{
  
    return this.http.get<ApiResponse<TaskResponse[]>>(this.API_URL,{headers:this.headers})
  }

  updateTask(id:number, data:TaskRequest):Observable<ApiResponse<TaskResponse>>{
    return this.http.put<ApiResponse<TaskResponse>>(this.API_URL_UPDATE+id,data,{headers:this.headers})
  }

  deleteTask(id:number):Observable<ApiResponse<TaskResponse>>{
    return this.http.delete<ApiResponse<TaskResponse>>(this.API_URL_DELETE+id,{headers:this.headers})
  }
}

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

  readonly API_URL = "https://to-do-back-soru.onrender.com/api/v1/tasks"

  readonly API_URL_CREATE = "https://to-do-back-soru.onrender.com/api/v1/tasks/create"

  readonly API_URL_UPDATE = "https://to-do-back-soru.onrender.com/update?id="

  readonly API_URL_DELETE = "https://to-do-back-soru.onrender.com/api/v1/tasks/delete?id="

  readonly token = localStorage.getItem("Authorization")||""

  constructor(private http:HttpClient) {}

  getTasks():Observable<ApiResponse<TaskResponse[]>>{
    return this.http.get<ApiResponse<TaskResponse[]>>(this.API_URL)
  }

  createTask(task:TaskRequest):Observable<ApiResponse<TaskResponse>>{
    return this.http.post<ApiResponse<TaskResponse>>(this.API_URL_CREATE,task)
  }

  updateTask(id:number, data:TaskRequest):Observable<ApiResponse<TaskResponse>>{
    return this.http.put<ApiResponse<TaskResponse>>(this.API_URL_UPDATE+id,data)
  }

  deleteTask(id:number):Observable<ApiResponse<TaskResponse>>{
    return this.http.delete<ApiResponse<TaskResponse>>(this.API_URL_DELETE+id)
  }
}

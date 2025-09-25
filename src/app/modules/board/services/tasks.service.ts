import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskResponse } from '../models/response/taskResponse';
import { ApiResponse } from '../../auth/models/response/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  readonly API_URL = "http://localhost:8080/api/v1/tasks"

  constructor(private http:HttpClient) {}

  getTasks():Observable<ApiResponse<TaskResponse[]>>{
    const token = localStorage.getItem("Authorization")||""

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token
    })

    return this.http.get<ApiResponse<TaskResponse[]>>(this.API_URL,{headers})
  }
}

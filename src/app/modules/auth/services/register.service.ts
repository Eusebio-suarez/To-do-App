import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/request/registerRequest';
import { RegisterResponse } from '../models/response/registerResponse';
import { ApiResponse } from '../models/response/apiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly API_URL="http://localhost:8080/api/v1/auth/register"

  constructor(private http:HttpClient) {

  }

  tryRegister(request:RegisterRequest):Observable<ApiResponse<RegisterResponse>>{
    return this.http.post<ApiResponse<RegisterResponse>>(this.API_URL,request)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/request/loginRequest';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response/apiResponse';
import { LoginResponse } from '../models/response/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API_URL="https://to-do-back-soru.onrender.com/api/v1/auth/login"

  constructor(private http:HttpClient) {

  }

  tryLogin(loginRequest:LoginRequest):Observable<ApiResponse<LoginResponse>>{
    return this.http.post<ApiResponse<LoginResponse>>(this.API_URL,loginRequest)
  }
}

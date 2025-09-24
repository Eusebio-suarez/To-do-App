import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginRequest';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API_URL="http://localhost:8080/api/v1/auth/login"

  constructor(private http:HttpClient) {

  }

  tryLogin(loginRequest:LoginRequest):Observable<ApiResponse<LoginResponse>>{
    return this.http.post<ApiResponse<LoginResponse>>(this.API_URL,loginRequest)
  }
}

import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  readonly router = inject(Router)

  constructor() { }


  logout(){
    localStorage.removeItem("Authorization")

    this.router.navigate(["/auth"])
  }
}

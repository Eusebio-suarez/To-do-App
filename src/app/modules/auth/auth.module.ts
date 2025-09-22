import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [AuthPageComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

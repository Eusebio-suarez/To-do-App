import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuthPageComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

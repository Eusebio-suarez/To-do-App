import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "src/app/app-routing.module";
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [AuthPageComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
]
})
export class AuthModule { }

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //formulario
  loginForm:FormGroup
  //campo correo del formulario
  email:FormControl
  //campo contraseña del correo
  password:FormControl

  constructor(
    private loginService:LoginService,
    private toastr:ToastrService,
    private router:Router
  ){
  //inicialisar los atributos
    this.email = new FormControl('',[Validators.email,Validators.required])
    this.password = new FormControl('',[Validators.minLength(8),Validators.required])

  //crear la instancia del formulario  
    this.loginForm=new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  handlerSubmit(){
    this.loginService.tryLogin(this.loginForm.value).subscribe({
      next: (response)=>{

        localStorage.setItem("Authorization","Bearer "+response.data.token)
        this.toastr.success(response.message,"Éxito")
        this.router.navigate(["board"])
      },
      error: (e)=>{
        this.toastr.error(e.error.message,"Error")
        console.log(e)
      }
    })
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup

  name:FormControl

  email:FormControl

  password:FormControl

  constructor(
    private registerService:RegisterService,
    private toastr:ToastrService,
    private router:Router

  ){
    this.name = new FormControl("",[Validators.minLength(4),Validators.required])
    this.email = new FormControl("",[Validators.email,Validators.required])
    this.password = new FormControl("",[Validators.minLength(8),Validators.required])


    this.registerForm= new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password
    })

  }

  handlerSubmit(){
    this.registerService.tryRegister(this.registerForm.value).subscribe({
      next:(response)=>{
        this.toastr.success(response.message,"Exito")
        this.router.navigate(["auth"])

      },
      error:(e)=>{
        this.toastr.error((e.error.message),"Error")
        console.log(e);
      }
    })
  }
}

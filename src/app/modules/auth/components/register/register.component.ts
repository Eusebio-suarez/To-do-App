import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(){
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
    console.log(this.registerForm.value)
  }
}

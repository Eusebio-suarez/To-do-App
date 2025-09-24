import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AuthPageComponent } from './modules/auth/pages/auth-page/auth-page.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"auth",
    component:AuthPageComponent,

    children:[
      {
        path:"",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

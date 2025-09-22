import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from "src/app/app-routing.module";



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { ɵInternalFormsSharedModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    BoardPageComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
]
})
export class BoardModule { }

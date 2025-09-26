import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { ɵInternalFormsSharedModule, ReactiveFormsModule } from "@angular/forms";
import { FormCreateComponent } from './components/form-create/form-create.component';



@NgModule({
  declarations: [
    BoardPageComponent,
    TaskDetailsComponent,
    FormCreateComponent
  ],
  imports: [
    CommonModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
]
})
export class BoardModule { }

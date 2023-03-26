import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciesComponent } from './dependencies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquarePipe } from '../square.pipe';
import { ChildcomponentComponent } from './depedencies/childcomponent/childcomponent.component';



@NgModule({
  declarations: [DependenciesComponent, ChildcomponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[SquarePipe],
})
export class DepedenciesModule { }

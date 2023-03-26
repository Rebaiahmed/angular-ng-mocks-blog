import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { SquarePipe } from './square.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DepedenciesModule } from './dependencies/depedencies.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepedenciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { SquarePipe } from './square.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepedenciesModule } from './dependencies/depedencies.module';
import { TestComponent } from './mocking-dependencies/test/test.component';
import { MultiplierPipe } from './multiplier.pipe';
import { ReversePipe } from './reverse.pipe';
import { ExampleComponent } from './mockbuilder/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MultiplierPipe,
    ReversePipe,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepedenciesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

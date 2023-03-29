import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder } from 'ng-mocks';
import { ApicrudService } from 'src/app/apicrud.service';
import { MultiplierPipe } from 'src/app/multiplier.pipe';
import { ReversePipe } from 'src/app/reverse.pipe';
import { SquarePipe } from 'src/app/square.pipe';

import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {

    beforeEach(() => 
    MockBuilder(ExampleComponent)
    // It will be declared as a mock in the TestBed.
    .mock(MultiplierPipe)
    .mock(SquarePipe)
    // It will be declared as a mock in the TestBed.
    .mock(FormsModule)
    .mock(MatGridListModule)
    .mock(ApicrudService)
     // It will be imported as it is in the TestBed.
    .keep(HttpClientModule)
    );
   /*  await TestBed.configureTestingModule({
      imports:[ 
        RouterTestingModule,
       HttpClientModule,
        FormsModule,
       BrowserAnimationsModule],
      declarations: [ ExampleComponent ],
      providers: [
        MultiplierPipe,SquarePipe,ReversePipe,
       ApicrudService
      ]
    })
    .compileComponents(); */

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

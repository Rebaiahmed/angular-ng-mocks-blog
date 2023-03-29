import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ApicrudService } from 'src/app/apicrud.service';
import { MultiplierPipe } from 'src/app/multiplier.pipe';
import { ReversePipe } from 'src/app/reverse.pipe';
import { SquarePipe } from 'src/app/square.pipe';

import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    .compileComponents();

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

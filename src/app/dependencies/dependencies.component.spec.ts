import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';
import { SquarePipe } from '../square.pipe';
import { ChildcomponentComponent } from './depedencies/childcomponent/childcomponent.component';

import { DependenciesComponent } from './dependencies.component';

fdescribe('DependenciesComponent', () => {
  let component: DependenciesComponent;
  let fixture: ComponentFixture<DependenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenciesComponent, 
        MockComponent(ChildcomponentComponent),
        MockPipe(SquarePipe)
       ],
      imports:[ 
        HttpClientModule,
        MockModule(FormsModule),
        MockModule(ReactiveFormsModule) ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

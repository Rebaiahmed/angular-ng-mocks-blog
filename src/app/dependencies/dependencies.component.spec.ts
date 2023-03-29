import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockBuilder, MockComponent, MockModule, MockPipe, MockRender } from 'ng-mocks';
import { ApicrudService } from '../apicrud.service';
import { SquarePipe } from '../square.pipe';
import { ChildcomponentComponent } from './depedencies/childcomponent/childcomponent.component';

import { DependenciesComponent } from './dependencies.component';

describe('DependenciesComponent', () => {
  let component: DependenciesComponent;
  let fixture: ComponentFixture<DependenciesComponent>;

  beforeEach(async () => {
    return MockBuilder()
    .keep(DependenciesComponent)
    .keep(ChildcomponentComponent)
    .mock(SquarePipe)
    .mock(ApicrudService)
    .mock(FormsModule)
    .mock(ReactiveFormsModule)
    .keep(HttpClientModule)
    
  });

  it('should create', () => {
    const fixture = MockRender(DependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

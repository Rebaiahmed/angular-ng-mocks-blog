import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularSplitModule } from 'angular-split';
import { MockComponent, MockComponents, MockModule, MockPipes, MockService } from 'ng-mocks';
import { ApicrudService } from 'src/app/apicrud.service';
import { MultiplierPipe } from 'src/app/multiplier.pipe';
import { ReversePipe } from 'src/app/reverse.pipe';
import { SquarePipe } from 'src/app/square.pipe';
import { ChildBComponent } from '../child-b/child-b.component';
import { ChildComponent } from '../child/child.component';

import { TestComponent } from './test.component';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(RouterTestingModule),
        MockModule(HttpClientModule),
        MockModule(FormsModule),
        MockModule(BrowserAnimationsModule),
        MockModule(MatIconModule),
        MockModule(MatToolbarModule),
        MockModule(MatListModule),
        MockModule(MatTooltipModule),
        MockModule(MatGridListModule),
        MockModule(AngularSplitModule),
      ],
      declarations: [ TestComponent,
        MockComponents(ChildComponent,ChildBComponent),],
      providers: [
        MockPipes(MultiplierPipe,SquarePipe,ReversePipe),
        MockService(ApicrudService)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

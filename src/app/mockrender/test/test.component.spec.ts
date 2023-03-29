import { DebugElement, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestComponent } from './test.component';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the title input', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleElement: DebugElement = fixture.debugElement.query(By.css('h2'));
    expect(titleElement.nativeElement.textContent).toContain('Test Title');
  });

  it('should set the input1 input', () => {
    component.input1 = 'Input 1';
    fixture.detectChanges();
    const input1Element: HTMLInputElement = fixture.debugElement.query(By.css('#input1')).nativeElement;
    expect(input1Element.value).toContain('Input 1');
  });

  it('should set the input2 input', () => {
    component.input2 = 'Input 2';
    fixture.detectChanges();
    const input2Element: HTMLInputElement = fixture.debugElement.query(By.css('#input2')).nativeElement;
    expect(input2Element.value).toContain('Input 2');
  });

  it('should set the input3 input', () => {
    component.input3 = 'Input 3';
    fixture.detectChanges();
    const input3Element: HTMLInputElement = fixture.debugElement.query(By.css('#input3')).nativeElement;
    expect(input3Element.value).toContain('Input 3');
  });

  it('should emit the buttonClick output', () => {
    spyOn(component.buttonClick, 'emit');
    const buttonElement: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.click();
    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  /* it('should render the custom content', () => {
    const testFixture = TestBed.createComponent(TestComponent);
    testFixture.detectChanges();
    const contentChild: DebugElement = testFixture.debugElement.query(By.directive(TestComponent)).query(By.directive(TemplateRef));
    expect(contentChild.nativeElement.textContent).toContain('This is the custom content.');
  }); */
});

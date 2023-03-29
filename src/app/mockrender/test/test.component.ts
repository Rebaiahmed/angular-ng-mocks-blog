import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{title}}</h2>
  <ng-container *ngTemplateOutlet="childContent"></ng-container>
  <div>
    <label id="input1" for="input1">Input 1: {{input1}}</label>
  </div>
  <div>
    <label id="input2" for="input2">Input 2: {{input2}}</label>
  </div>
  <div>
    <label id="input3" for="input3">Input 3: {{input3}}</label>
  </div>
  <button (click)="onButtonClick()">Click me</button>
`
})
export class TestComponent {

  @Input() title: string;
  @Input() input1: string;
  @Input() input2: string;
  @Input() input3: string;
  @Output() buttonClick = new EventEmitter();
  @ContentChild(TemplateRef) childContent: TemplateRef<any>;

  onButtonClick() {
    this.buttonClick.emit();
  }

}

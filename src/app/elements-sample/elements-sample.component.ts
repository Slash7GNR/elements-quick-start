import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-elements-sample',
  template: `
    Please enter your name:
    <input #name type="text">
    <button (click)="onSubmit()">Submit</button>
    <div *ngIf="additionalText">{{additionalText}}</div>
  `,
  styles: [
    `
      div {
        color: red;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ElementsSampleComponent {

  @ViewChild('name') name: ElementRef; 
  @Input() additionalText: string;
  @Output() userSubmitted: EventEmitter<string> = new EventEmitter();

  public onSubmit() {
    const name = this.name.nativeElement.value;
    this.userSubmitted.emit(name);
  }
}

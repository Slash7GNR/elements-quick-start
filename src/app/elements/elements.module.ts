import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ElementsSampleComponent } from '../elements-sample/elements-sample.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule, CommonModule
  ],
  entryComponents: [ElementsSampleComponent]
})
export class ElementsModule { 
  
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(ElementsSampleComponent, {injector: this.injector});
    customElements.define('element-sample', element);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErmIfDirective } from './erm-if.directive';
import { ErmForDirective } from './erm-for.directive';
import { ChildComponent } from './child/child.component';
import { ErmSwitchDirective, ErmSwitchCaseDirective } from './erm-switch.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErmIfDirective,
    ErmForDirective,
    ChildComponent,
    ErmSwitchDirective,
    ErmSwitchCaseDirective
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

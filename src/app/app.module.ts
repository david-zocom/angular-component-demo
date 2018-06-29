import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { Counter2Component } from './counter2/counter2.component';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component,
    PartyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

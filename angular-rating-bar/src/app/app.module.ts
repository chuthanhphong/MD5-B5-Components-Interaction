import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RattingComponent } from './ratting/ratting.component';
import { RatttingComponent } from './rattting/rattting.component';

@NgModule({
  declarations: [
    AppComponent,
    RattingComponent,
    RatttingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

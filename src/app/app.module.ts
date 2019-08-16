import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component';
// import { TestComponent } from './test.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    AppRoutes
  ],
  declarations: [ 
    AppComponent, 
    // TestComponent
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

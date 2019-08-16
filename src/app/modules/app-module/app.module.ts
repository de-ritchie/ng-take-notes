import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutes
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule{}
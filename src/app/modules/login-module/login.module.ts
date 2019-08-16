import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    LoginRoutes
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule{}
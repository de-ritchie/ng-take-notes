import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login/login.component';
import { MatModule } from '../mat-module/mat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutes,
    MatModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule{}
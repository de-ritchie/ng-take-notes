import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { TestComponent } from './test.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

let appRoutes: Routes = [
  {
    path: '',
    // redirectTo: 'login',
    // component: TestComponent,
    loadChildren: () => import('./modules/app-module/app.module').then( mod => mod.AppModule),
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login-module/login.module').then( mod => mod.LoginModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutes{}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((module) => module.LoginModule),
    outlet: 'login',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'rrhh',
    loadChildren: () =>
      import('./rrhh/rrhh.module').then((module) => module.RrhhModule),
    data: { breadcrumb: { alias: 'Human_Resources', disable: true } },
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./security/security.module').then(
        (module) => module.SecurityModule
      ),
    data: { breadcrumb: { alias: 'security', disable: true } },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

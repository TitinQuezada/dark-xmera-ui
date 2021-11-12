import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolesComponent } from './roles/roles.component';
import { ScreensComponent } from './screens/screens.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionsComponent,
    data: { breadcrumb: { alias: 'permissions' } },
  },
  {
    path: 'permissions',
    component: PermissionsComponent,
    data: { breadcrumb: { alias: 'permissions' } },
  },
  {
    path: 'roles',
    component: RolesComponent,
    data: { breadcrumb: { alias: 'roles' } },
  },
  {
    path: 'modules',
    component: ModulesComponent,
    data: { breadcrumb: { alias: 'modules' } },
  },
  {
    path: 'screens',
    component: ScreensComponent,
    data: { breadcrumb: { alias: 'screens' } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolesComponent } from './roles/roles.component';
import { ModulesComponent } from './modules/modules.component';
import { ScreensComponent } from './screens/screens.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PermissionsComponent,
    RolesComponent,
    ModulesComponent,
    ScreensComponent,
  ],
  imports: [CommonModule, SecurityRoutingModule, SharedModule],
})
export class SecurityModule {}

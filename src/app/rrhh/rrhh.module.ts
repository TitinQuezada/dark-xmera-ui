import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { PositionsComponent } from './positions/positions.component';
import { DeparmentsComponent } from './deparments/deparments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PositionsComponent, DeparmentsComponent],
  imports: [CommonModule, RrhhRoutingModule, SharedModule],
})
export class RrhhModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentsComponent } from './deparments/deparments.component';
import { PositionsComponent } from './positions/positions.component';

const routes: Routes = [
  {
    path: 'positions',
    component: PositionsComponent,
    data: { breadcrumb: { alias: 'Positions' } },
  },
  {
    path: 'deparments',
    component: DeparmentsComponent,
    data: { breadcrumb: { alias: 'Deparments' } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RrhhRoutingModule {}

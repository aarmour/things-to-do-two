import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

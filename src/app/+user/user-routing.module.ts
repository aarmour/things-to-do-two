import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

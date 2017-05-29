import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './+admin/admin.module#AdminModule',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: './+events/events.module#EventsModule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

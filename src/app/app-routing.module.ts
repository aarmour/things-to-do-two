import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule'
  },
  {
    path: 'admin',
    loadChildren: './+admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'events',
    loadChildren: './+events/events.module#EventsModule'
  },
  {
    path: 'user',
    loadChildren: './+user/user.module#UserModule',
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

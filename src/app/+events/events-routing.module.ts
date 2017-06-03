import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { EventsPageComponent } from './events-page/events-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateEventPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

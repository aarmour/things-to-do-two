import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { EventsRoutingModule } from './events-routing.module';
import { EventsPageComponent } from './events-page/events-page.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { CreateEventFormComponent } from './create-event-form/create-event-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    EventsRoutingModule
  ],
  declarations: [EventsPageComponent, CreateEventPageComponent, CreateEventFormComponent]
})
export class EventsModule { }

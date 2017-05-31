import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule
} from '@angular/material';

const mdModules = [
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule
];

@NgModule({
  imports: [
    CommonModule,
    ...mdModules
  ],
  exports: [
    ...mdModules
  ],
  declarations: []
})
export class ComponentsModule { }

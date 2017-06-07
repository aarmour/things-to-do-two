import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdInputModule
} from '@angular/material';

const mdModules = [
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdInputModule
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

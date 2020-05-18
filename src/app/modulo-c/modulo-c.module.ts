import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloCRoutingModule } from './modulo-c-routing.module';
import { ComponentCComponent } from './component-c/component-c.component';


@NgModule({
  declarations: [ComponentCComponent],
  imports: [
    CommonModule,
    ModuloCRoutingModule
  ]
})
export class ModuloCModule { }

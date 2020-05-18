import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloARoutingModule } from './modulo-a-routing.module';
import { ComponentAComponent } from './component-a/component-a.component';


@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    ModuloARoutingModule
  ]
})
export class ModuloAModule { }

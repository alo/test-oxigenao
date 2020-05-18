import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloBRoutingModule } from './modulo-b-routing.module';
import { ComponentBComponent } from './component-b/component-b.component';

@NgModule({
  declarations: [ComponentBComponent],
  imports: [CommonModule, ModuloBRoutingModule],
})
export class ModuloBModule {}

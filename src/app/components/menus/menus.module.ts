import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { MenusComponent } from './menus.component';

@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MenusComponent
  ]
})
export class MenusModule { }

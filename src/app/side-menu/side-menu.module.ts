import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LogoModule } from '../logo/logo.module';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LogoModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }

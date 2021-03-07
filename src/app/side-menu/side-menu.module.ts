import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LogoModule } from '../logo/logo.module';
import { MenuModule } from '../menu/menu.module';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LogoModule,
    MenuModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }

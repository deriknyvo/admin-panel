import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';
import { MenusModule } from '../menus/menus.module';
import { UserMenuModule } from '../user-menu/user-menu.module';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    MenusModule,
    UserMenuModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }

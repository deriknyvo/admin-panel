import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';
import { MenuModule } from '../menu/menu.module';
import { ProfileModule } from '../profile/profile.module';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    MenuModule,
    ProfileModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }

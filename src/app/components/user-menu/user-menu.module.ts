import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { UserMenuComponent } from './user-menu.component';

@NgModule({
  declarations: [
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserMenuComponent
  ]
})
export class UserMenuModule { }

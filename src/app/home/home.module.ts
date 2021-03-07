import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuModule } from '../side-menu/side-menu.module';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    canActivate: [AuthGuard] 
  }
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SideMenuModule
  ]
})
export class HomeModule { }

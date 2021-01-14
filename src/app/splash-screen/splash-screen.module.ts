import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { SplashScreenComponent } from './splash-screen.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent }
]

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SplashScreenModule { }

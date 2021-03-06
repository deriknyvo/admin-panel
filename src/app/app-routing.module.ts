import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/splash-screen/splash-screen.module').then(m => m.SplashScreenModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },

  // Rota coringa sempre tem que ser a última na lista de rotas
  {
    path: '**',
    loadChildren: () => import('../app/splash-screen/splash-screen.module').then(m => m.SplashScreenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

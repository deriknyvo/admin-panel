import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {

  constructor(public router: Router) {
    setTimeout(() => {
      this.verifyUserLogged()
    }, 2000);
  }

  verifyUserLogged() {
    const isAuth = JSON.parse(localStorage.getItem('auth'));

    if (isAuth?.status === 'logged') {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

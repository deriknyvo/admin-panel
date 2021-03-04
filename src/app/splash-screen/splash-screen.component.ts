import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashScreenComponent {

  constructor(public router: Router) {
    setTimeout(() => {
      this.verifyUserLogged();
    }, 2000);
  }

  verifyUserLogged() {
    const isAuth = JSON.parse(localStorage.getItem('auth'));

    if (isAuth?.status === 'logged') {
      this.router.navigate(['home']);

      return true;
    }

    this.router.navigate(['login']);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public hide = true;

  public loginForm: FormGroup = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    public router: Router
  ) { }

  login() {
    const { user, password } = this.loginForm.value

    if (user === 'Derik' && password === '123456') {
      localStorage.setItem('auth', JSON.stringify({ token: 'asdasdasd', status: 'logged' }));

      this.router.navigate(['home']);
    }
  }

}

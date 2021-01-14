import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;
  public loginForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { user, password } = this.loginForm.value

    if (user === 'Derik' && password === '123456') {
      localStorage.setItem('auth', JSON.stringify({ token: 'asdasdasd', status: 'logged' }));

      this.router.navigate(['home']);
    }
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate() {
    const isAuth = JSON.parse(localStorage.getItem('auth'));

    if (isAuth?.status === 'logged') {
      return true;
    }

    return false;
  }
  
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { usersList } from './users-list';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const credentials = JSON.parse(localStorage.getItem('userDetails'));
      console.log('credentials', credentials);
      if (credentials == null) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
  }
}

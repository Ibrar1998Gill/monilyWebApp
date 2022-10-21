import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public router: Router,
    private authService:AuthGuardService) { }
  //   canActivate(): boolean {
  //   if (!this.authService.getToken()) {
  //     this.router.navigateByUrl("/login");
  //   }
  //   return this.authService.getToken();
  // }
  canActivate(next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = (localStorage.getItem('authUser'));
    if (!user ) {
      this.router.navigate(['/auth/login']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/registration']);
        return true
      }
    }
    return true
  }

}
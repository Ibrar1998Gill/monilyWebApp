import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';
import { LocalService } from '../services/local.service';

@Injectable({
    providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

    constructor(private authService: AuthGuardService, private localService: LocalService,
        private router: Router) { }

        canActivate(next: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
          // Guard for user is login or not
          let user = this.localService.getJsonValue('authUser');
          if (user) {
            if (Object.keys(user).length > -1) {
              this.router.navigate(['']);
              return true
            }
          }
          return true
        }
}
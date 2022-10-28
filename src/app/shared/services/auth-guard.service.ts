import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private localService: LocalService) { }
  getToken() {
    return !!this.localService.getJsonValue('authUser')
  }
  isLoggedIn(): boolean {
    let loggedIn: boolean = false;
    let expiration = this.getExpiration();

    if (expiration) {
      return Date.now() < expiration;
    }
    return loggedIn;
  }
  private getExpiration(): number {
    let expiresAt: any = null;

    const expiration = localStorage.getItem("expires_at");

    if (expiration) {
      expiresAt = JSON.parse(expiration);
    }

    return expiresAt;
  }
}
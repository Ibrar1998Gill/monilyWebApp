import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import * as firebase from 'firebase/app';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UniversalService } from '../universal.service';
import { LocalService } from '../local.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HelperService } from '../helper.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public userData: any;
  public user: firebase.User;
  public showLoader: boolean = false;
  public authToken = null
  constructor(
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone,
    public help: HelperService,
    private cookieService: CookieService,
    private toaster:ToastrService,
    private localService: LocalService) {
    this.authToken = this.localService.getJsonValue('authUser')
  }

  ngOnInit(): void {
  }

  // sign in function
  // SignIn(email, password) {
  //   return this.http.post(`https://monilyapp.yourhealthgrades.com/api/quickbooks/login?email=${email}&password=${password}`, {}, {});
  //   //     this.toster.error('You have enter Wrong Email or Password.');
  // }
  SignIn(email, password) {
    let headerT = {
      "Access-Control-Allow-Origin": '*',
      Accept: "application/json",
    };
    return this.http.post(`https://monilyapp.yourhealthgrades.com/api/quickbooks/login?email=${email}&password=${password}`, {},
      {
        headers: headerT,
      }
    );
  }
  // Sign out
  SignOut() {
    UniversalService.companyModal.next(false)
    setTimeout(() => {
      this.localService.clearToken();
      this.cookieService.deleteAll('user', '/auth/login');
      this.router.navigate(['/auth/login']);
    }, 1000);
  }
  getChat(link, token) {
    let header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Accept: "application/json",
    };
    let headerT = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Authorization: `Bearer ${this.authToken?.authtoken}`,
      Accept: "application/json",
    };
    return this.http.get(
      environment.api.chatURL + link,
      {
        headers: !token ? header : headerT,
      }
    )
  }
  getChatWithToken(link, token) {
    let headerT = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
    return this.http.get(
      environment.api.chatURL + link,
      {
        headers: headerT,
      }
    )
  }
  postChat(link) {
    let headerT = {
      Authorization: `Bearer ${this.authToken?.authtoken}`,
      Accept: "application/json",
    };
    return this.http.post(
      environment.api.chatURL + link, {},
      {
        headers: headerT,
      }
    )
  }
  postSocket(link, data) {
    let headerT = {
      Authorization: `Bearer 740|w6cUBvlIdDc6cvkaRKTxDwEERspEd9rncLyE4cn9`,
      Accept: "application/json",
    };
    return this.http.post(
      link, data,
      {
        headers: headerT,
      }
    )
  }
  uploadImage(link, payload) {
    let headerT = {
      Authorization: `Bearer ${this.authToken?.authtoken}`,
      Accept: "application/json",
    };
    return this.http.post(
      environment.api.chatURL + link, payload,
      {
        headers: headerT,
      }
    )
  }
  getMonilyData(link, token) {
    let header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Accept: "application/json"
    };
    let headerT = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Authorization: `Bearer ${this.authToken?.authtoken}`,
      Accept: "application/json",
    };
    return this.http.get(
      environment.api.monilyURL + link,
      {
        headers: !token ? header : headerT,
      }
    )
  }
  getUsers(link, token) {
    let header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Accept: "application/json",
    };
    let headerT = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Authorization: `Bearer 713|AbACuYf9XztrvrMDnZ3BheUsdY9HYG2VFQL7gX4d`,
      Accept: "application/json",
    };
    return this.http.get(
      environment.api.monilyUsers + link,
      {
        headers: !token ? header : headerT,
      }
    )
  }
  postUsers(link, data) {
    let headerT = {
      Authorization: `Bearer 716|HcG0gFtzsvq8G7w6xMaZCApdEuTCcE9FBKJeurdD`,
      Accept: "application/json",
    };
    return this.http.post(
      environment.api.monilyUsers + link, data,
      {
        headers: headerT,
      }
    )
  }
  private handleError(error: HttpErrorResponse) {
    return error.error.message;
  }
}
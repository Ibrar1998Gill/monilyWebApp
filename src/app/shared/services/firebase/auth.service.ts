import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UniversalService } from '../universal.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public userData: any;
  public user: firebase.User;
  public showLoader: boolean = false;
  constructor(
    private http: HttpClient,
    public router: Router,
    public ngZone: NgZone,
    public toster: ToastrService,
    private cookieService: CookieService) {
  }

  ngOnInit(): void { }

  // sign in function
  SignIn(email, password) {
    return this.http.post(`https://monilyapp.yourhealthgrades.com/api/quickbooks/login?email=${email}&password=${password}`, {}, {});
    //     this.toster.error('You have enter Wrong Email or Password.');
  }

  // Sign out
  SignOut() {
    UniversalService.companyModal.next(false)
    setTimeout(() => {
      localStorage.clear();
      this.cookieService.deleteAll('user', '/auth/login');
      this.router.navigate(['/auth/login']);
    }, 1000);
  }
  getChat(link, token) {
    let authToken = JSON.parse(localStorage.getItem("authUser"))
    let header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Accept: "application/json",

    };
    let headerT = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Authorization: `Bearer ${authToken?.authtoken}`,
      Accept: "application/json",
    };
    return this.http.get(
      environment.api.chatURL + link,
      {
        headers: !token ? header : headerT,
      }
    );
  }
  postChat(link) {
    let authToken = JSON.parse(localStorage.getItem("authUser"))
    let headerT = {
      Authorization: `Bearer ${authToken?.authtoken}`,
      Accept: "application/json",
    };
    return this.http.post(
      environment.api.chatURL + link, {},
      {
        headers: headerT,
      }
    );
  }
  postQuickbooks(link, payload, params) {
    // quickbooks.api.intuit.com/v3/company/4620816365014867780/invoice?minorversion=63
    const minorversion = '14';
    let authToken = JSON.parse(localStorage.getItem("authUser"))
    let headerT = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" : '*',
      Accept: "application/text",
      Authorization: `Bearer ${authToken?.qbconfig[0].access_token}`
    };
    return this.http.post(
      environment.api.quickbooksURL + link + "?minorversion=" + minorversion, payload,
      {
        headers: headerT,
      }
    );
  }

}
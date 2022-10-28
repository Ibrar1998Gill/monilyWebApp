import { Component, PLATFORM_ID, Inject, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { map, delay, withLatestFrom } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { PushNotificationService } from 'ng-push-notification';
import { io } from 'socket.io-client';
import { UniversalService } from './shared/services/universal.service'
import * as $ from 'jquery'
import { AuthService } from './shared/services/firebase/auth.service';
import { LocalService } from './shared/services/local.service';
declare var require
const Swal = require('sweetalert2')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket = io('https://monily-mobile-app.herokuapp.com');
  companies: any = [];
  companySelected:any = null;
  // For Progressbar
  loaders = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );
  userDetails: any;
  companyFound: boolean = false
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private loader: LoadingBarService, translate: TranslateService,
    private pushNotification: PushNotificationService,
    private cd: ChangeDetectorRef,
    private localService: LocalService,
    private authService: AuthService) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'de', 'es', 'fr', 'pt', 'cn', 'ae']);
    }
  }
  ngOnInit() {
    this.observe()
    if(this.localService.getJsonValue('company')== null){
      this.getRecentUser()
    }
    this.socket.on('message', (messageInfo) => {
      console.log('====================================');
      console.log(messageInfo, "hello app message");
      console.log('====================================');
      var msg = JSON.parse(messageInfo)
      if (msg?.to_id == this.userDetails?.userId) {
        this.showPush(msg)
      }
    });
  }
  getRecentUser() {
    this.userDetails = this.localService.getJsonValue('authUser')
    if (this.userDetails) {
      UniversalService.companyModal.next(true)
      if (this.userDetails.hasOwnProperty('qbconfig')) {
        this.companyFound = true;
        this.userDetails.qbconfig.map((v: any) => {
          this.companies.push(v)
        })
      }
      else {
        this.companyFound = false;
        setTimeout(() => {
          this.error("No Company Found")
        }, 500);
      }
    }
  }
  showPush(messageInfo) {
    console.log('called');
    this.pushNotification.show(
      `${messageInfo?.message}`,
      {
        icon: '../assets/images/logo/logo-icon.png',
      },
      8000, // close delay.
    );
  }
  error(message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      showCancelButton: false,
      confirmButtonText: `Logout`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout()
      }
    })
  }
  async observe() {
    UniversalService.login.subscribe((res: any) => {
      if (res) {
        this.getRecentUser()
      }
      else {
        return
      }
    })
    UniversalService.companyModal.subscribe((res: any) => {
      setTimeout(() => {
        if (res && this.companyFound) {
          $("#companyModal").trigger('click')
        }
        else {
          $("#closeModal").trigger('click')
        }
      }, 500);
      this.cd.detectChanges();
    })
  }
  logout() {
    this.authService.SignOut();
  }
  select(){
    this.localService.setJsonValue('company', this.companySelected);
    UniversalService.companyModal.next(false)
    UniversalService.login.next(false)
  }
}
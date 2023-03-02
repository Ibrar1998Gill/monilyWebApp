import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AuthService } from './shared/services/auth.service';
import { AdminGuard } from './shared/guard/admin.guard';
import { SecureInnerPagesGuard } from './shared/guard/SecureInnerPagesGuard.guard';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { PushNotificationModule } from 'ng-push-notification';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { PushNotificationModule } from 'ng-push-notification';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EchoConfig, NgxLaravelEchoModule } from 'ngx-laravel-echo';
import Pusher from 'pusher-js';
import axios from 'axios';

declare global {
  interface Window {
    Echo?: any;
    Pusher?: any;
  }
}
export const echoConfig: EchoConfig = {
  userModel: 'users',
  notificationNamespace: 'App\\Notifications',
  options: {
    broadcaster: 'pusher',
    key: 'ef1b143bb6fa93c2e337',
    cluster: 'ap2',
    forceTLS: true,
    wsHost: 'monilyapp.yourhealthgrades.com',
    authorizer: (channel, options) => {
      console.log(channel);
      
      return {
        authorize: (socketId, callback) => {
          axios.defaults.withCredentials = true;
            // axios.post('http://monilyapp.local/api/broadcasting/auth', {
            axios.post('http://monilyapp.yourhealthgrades.com/api/broadcasting/auth', {
                socket_id: socketId,
                channel_name: channel.name
            } , {
              headers:{
                Authorization:  'Bearer ' + "740|w6cUBvlIdDc6cvkaRKTxDwEERspEd9rncLyE4cn9"
                // Authorization:  'Bearer ' + "65|HofL4bdlAosbK0mdqkqSNyz8u2zwj19Hbh9MNuMo"
              }
            })
            .then(response => {
              console.log(response);
                callback(false, response.data);
            })
            .catch(error => {
              console.log(error);
                callback(true, error);
            });
        }
      };
    }
  }
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PushNotificationModule.forRoot(),
    ToastrModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // for HttpClient use:
    LoadingBarHttpClientModule,
    // for Router use:
    LoadingBarRouterModule,
    // for Core use:
    LoadingBarModule,
    NgSelectModule,
    SweetAlert2Module,
    NgxLaravelEchoModule.forRoot(echoConfig)
  ],
  providers: [AuthService, AdminGuard, SecureInnerPagesGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http:HttpClient){}
}

import { Component, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { map, delay, withLatestFrom } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { PushNotificationService } from 'ng-push-notification';
import { io } from 'socket.io-client';
import { UniversalService } from './shared/services/universal.service'
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket = io('https://monily-mobile-app.herokuapp.com');
  selectedCar: any;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
];
  // For Progressbar
  loaders = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );
  userDetails:any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private loader: LoadingBarService, translate: TranslateService,
    private pushNotification: PushNotificationService,
    private cd:ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'de', 'es', 'fr', 'pt', 'cn', 'ae']);
    }
  }
  ngOnInit(){
    this.observe()
    this.getRecentUser()
    this.socket.on('message', (messageInfo) => {
      console.log('====================================');
      console.log(messageInfo,"hello app message");
      console.log('====================================');
      var msg = JSON.parse(messageInfo)
      if(msg?.to_id == this.userDetails?.userId){
        this.showPush(msg)
      }
    });
  }
  getRecentUser() {
    this.userDetails = JSON.parse(localStorage.getItem("authUser"))
  }
  showPush(messageInfo) {
    console.log('called');
    this.pushNotification.show(
      `${messageInfo?.message}`,
      {
        icon:'../assets/images/logo/logo-icon.png',
      },
      8000, // close delay.
    );
    // Or simply this:
    // this.pushNotification.show('And that too!');
  }
  async observe(){
    UniversalService.companyModal.subscribe((res:any)=>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      setTimeout(() => {
        if(res){
          alert("jgyh")
          $("#companyModal").trigger('click')
        }
      }, 1000);
      this.cd.detectChanges();
    })
  }
}

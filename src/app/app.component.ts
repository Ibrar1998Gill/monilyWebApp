import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { map, delay, withLatestFrom } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { PushNotificationService } from 'ng-push-notification';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket = io('https://monily-mobile-app.herokuapp.com');
  // For Progressbar
  loaders = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );
  userDetails:any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private loader: LoadingBarService, translate: TranslateService,
    private pushNotification: PushNotificationService) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'de', 'es', 'fr', 'pt', 'cn', 'ae']);
    }
  }
  ngOnInit(){
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
}

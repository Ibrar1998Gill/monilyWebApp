import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { UniversalService } from 'src/app/shared/services/universal.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public openMessageBox: boolean = false;
  // socket = io('https://monily-mobile-app.herokuapp.com');
  constructor(private http: AuthService, private localService: LocalService, private cd: ChangeDetectorRef) { }
  messageLists:any=[];
  userDetails:any;
  ngOnInit() {
    this.observe()
    this.getRecentUser()
    // this.socket.on('message', (messageInfo) => {
    //   var msg = JSON.parse(messageInfo)
    //   if(this.userDetails != null){
    //     if(msg?.to_id == this.userDetails?.userId || msg?.from_id == this.userDetails?.userId){
    //       this.getChat()
    //     }
    //   }
    // });
  }
async observe() {
    UniversalService.companyModal.subscribe((res: any) => {
      if (!res) {
        this.getRecentUser()
      }
      else {
        return
      }
      this.cd.detectChanges();
    })
  }
  toggleMessageBox() {
    this.openMessageBox = !this.openMessageBox;
  }
  getRecentUser(){
    this.userDetails = this.localService.getJsonValue('authUser')
    if(this.userDetails != null){
      this.getChat()
    }
    else return
  }
  getChat(){
    this.messageLists = []
    this.http.getChatWithToken(`getChatList?user_id=${this.userDetails?.userId}`,this.userDetails.authtoken).subscribe((res:any)=>{
      res?.data?.map(v=>{
        if(v.from_id == this.userDetails?.userId && v.to_id == this.userDetails?.userId){
          return
        }
        else{
          this.messageLists.push(v)
        }
      })
    }),err=>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
}

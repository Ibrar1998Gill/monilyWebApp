import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public openMessageBox: boolean = false;

  constructor(private http: AuthService) { }
  messageLists:any=[];
  userDetails:any;
  ngOnInit() {
    this.getRecentUser()
  }

  toggleMessageBox() {
    this.openMessageBox = !this.openMessageBox;
  }
  getRecentUser(){
    this.userDetails = JSON.parse(localStorage.getItem("authUser"))
    this.http.getChat(`getChatList?user_id=${this.userDetails?.userId}`,true).subscribe((res:any)=>{
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

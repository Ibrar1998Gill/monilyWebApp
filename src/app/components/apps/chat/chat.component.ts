import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { ChatUsers } from '../../../shared/model/chat.model';
import { debounce } from 'lodash';
import { LocalService } from 'src/app/shared/services/local.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class chatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public openTab: string = "call";
  public users: ChatUsers[] = []
  public searchUsers: ChatUsers[] = []
  public chatUser: any;
  public profile: any;
  public chatMessages: any;
  public chatText: string;
  public error: boolean = false;
  public notFound: boolean = false;
  public id: any;
  public searchText: string;
  public showEmojiPicker: boolean = false;
  public emojies: any;
  public mobileToggle: boolean = false
  public messageLists: any = [];
  public userDetails: any;
  public toUser: any = []
  public editMsg: boolean = false
  public editId: number;

  constructor(private http: AuthService, private toaster: ToastrService, private localService: LocalService) {
    this.searchTerm = debounce(this.searchTerm, 1000)
   }
  socket = io();
  // socket = io('https://monily-mobile-app.herokuapp.com');
  results$: Observable<any>
  ngOnInit() {
    this.getRecentUser()
    this.socket.on('message', (messageInfo) => {
      this.userChat(this.messageLists[0])
        this.getRecentUser()
    });
    this.socket.on('delete', message => {
      this.getRecentUser()
    });
    this.socket.on('deleteChat', message => {
      this.getRecentUser()
    });
  }
  public toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event, form) {
    const text = `${event.emoji.native}`;
    // if(!form.value.message){
    this.chatText = form.value.message + text;
    // }
    // else{
    //   this.chatText = text;
    // }
    this.showEmojiPicker = false;
  }

  public tabbed(val) {
    this.openTab = val
  }

  // User Chat
  public userChat(user) {
    this.toUser = user
    if(this.toUser?.hasOwnProperty('label')){
    this.http.getChat(`getChat?to_id=${this.toUser?.id}&from_id=${this.userDetails?.userId}`, true).subscribe((res: any) => {
      this.chatMessages = res?.data?.data
      setTimeout(() => {
        this.scrollToBottom()
      }, 500);
    }), err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
    }
    else{
      this.http.getChat(`getChat?to_id=${this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id}&from_id=${this.userDetails?.userId}`, true).subscribe((res: any) => {
        this.chatMessages = res?.data?.data
        setTimeout(() => {
          this.scrollToBottom()
        }, 500);
      }), err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      }
    }
  }

  // Send Message to User
  public sendMessage(form) {
    let time = new Date().getTime();
    if (!form.value.message) {
      this.error = true
      return false
    }
    this.error = false
    if(!this.editMsg){
      this.http.postChat(`sendMessage?to_id=${this.toUser?.hasOwnProperty('label') ? this.toUser?.id : this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id}&from_id=${this.userDetails?.userId}&message=${form.value.message}&timestamp=${time}`).subscribe(res => {
       this.socket.emit('message', {
          message: form.value.message,
          to_id: this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id,
          from_id: this.userDetails?.userId,
          timestamp: time,
        });
        this.chatText = ''
      }), err => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      }
    }
    else{
      this.http.postChat(`updateMessage?id=${this.editId}&message=${form.value.message}`).subscribe(res => {
        this.socket.emit('message', {
           message: form.value.message,
           to_id: this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id,
           from_id: this.userDetails?.userId,
           timestamp: time,
         });
         this.chatText = ''
         this.editMsg = false
       }), err => {
         console.log('====================================');
         console.log(err);
         console.log('====================================');
       }
    }
  }

  searchTerm(event: any) {
    if(!event.target.value){
      return
    }
    else{
      this.http.getChat(`getUsers?keyword=${event?.target?.value}`,true).subscribe((res:any)=>{
        let users:any=[]
        res?.data?.map(v=>{
          if(v?.id == this.userDetails?.userId){
            return
          }
          else{
            // users.push(v)
            users.push({
              label: v.name,
              value: v.name,
              id: v.id,
              email: v.email
            })
          }
        })
        this.searchUsers = users
      }),err=>{
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      }
    }
    // term = term.toLowerCase();
    // let user = []
    // this.users.filter(users => {
    //   if (users.name.toLowerCase().includes(term)) {
    //     user.push(users)
    //   }
    // })
    // this.searchUsers = user
  }

  mobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  getRecentUser() {
    this.userDetails = this.localService.getJsonValue('authUser')
    this.http.getChat(`getChatList?user_id=${this.userDetails?.userId}`, true).subscribe((res: any) => {
      this.messageLists=[]
      res?.data?.map(v => {
        if (v.from_id == this.userDetails?.userId && v.to_id == this.userDetails?.userId) {
          return
        }
        else {
          this.messageLists.push(v)
        }
      })
      this.userChat(this.messageLists[0])
    }), err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
  deleteMessage(chat) {
    this.http.postChat(`deleteMessage?id=${chat?.id}`).subscribe((res:any) => {
      if(res?.hasOwnProperty('messages')){
        res?.messages?.map(v=>{
          if(v == "Record deleted successfully"){
            this.toaster.success("Message deleted successfully")
          }
        })
      }
      this.socket.emit('delete', {});
      //  this.chatText = ''
     }), err => {
       console.log('====================================');
       console.log(err);
       console.log('====================================');
     }
  };
  editMessage(chat){
    this.editMsg = true;
    this.chatText = chat?.message;
    this.editId = chat?.id
  }
  deleteChat(toUser) {
    this.http.postChat(`deleteChat?to_id=${toUser?.to_id}&from_id=${toUser?.from_id}`).subscribe((res:any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      if(res?.hasOwnProperty('messages')){
        res?.messages?.map(v=>{
          if(v == "Chat deleted successfully"){
            this.toaster.success("Chat deleted successfully")
          }
        })
      }
      this.socket.emit('deleteChat',{delete:'deleteChat'});
      //  this.chatText = ''
     }), err => {
       console.log('====================================');
       console.log(err);
       console.log('====================================');
     }
  };
  selectUser(event){
    this.userChat(event)
  }
}

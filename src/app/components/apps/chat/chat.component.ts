import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
// import { io } from 'socket.io-client';
import { AuthService } from 'src/app/shared/services/auth.service';
import { debounce } from 'lodash';
import { LocalService } from 'src/app/shared/services/local.service';
import { EchoService } from 'ngx-laravel-echo';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class chatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public openTab: string = "call";
  public users: [] = []
  public searchUsers: [] = []
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

  constructor(private toasterService: ToastrService, private http: AuthService, private toaster: ToastrService, private localService: LocalService, private echo: EchoService) {
    this.echo.echo.private('chat-channel')
      .listen('MessageEvent', (e) => {
        console.log(e.key);
        console.log(e.message, 'messgae');
        this.userChat(this.messageLists[0])
        this.getRecentUser()
      })
    this.searchTerm = debounce(this.searchTerm, 1000)
  }
  results$: Observable<any>
  ngOnInit() {
    this.getRecentUser()
  }
  public toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event, form) {
    const text = `${event.emoji.native}`;
    this.chatText = form.value.message + text;
    this.showEmojiPicker = false;
  }

  public tabbed(val) {
    this.openTab = val
  }

  // User Chat
  public userChat(user) {
    this.toUser = user
    if (this.toUser?.hasOwnProperty('label')) {
      this.http.getChatToken(`getChat?to_id=${this.toUser?.id}&from_id=${this.userDetails?.userId}`, this.userDetails.authtoken).subscribe((res: any) => {
        this.chatMessages = res?.data?.data
        setTimeout(() => {
          this.scrollToBottom()
        }, 500);
      },
        error => {
          this.toasterService.error(error?.error?.message)
        })
    }
    else {
      this.http.getChatToken(`getChat?to_id=${this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id}&from_id=${this.userDetails?.userId}`, this.userDetails.authtoken).subscribe((res: any) => {
        this.chatMessages = res?.data?.data
        setTimeout(() => {
          this.scrollToBottom()
        }, 500);
      },
        error => {
          this.toasterService.error(error?.error?.message)
        })
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
    if (!this.editMsg) {
      this.http.postChat(`sendMessage?to_id=${this.toUser?.hasOwnProperty('label') ? this.toUser?.id : this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id}&from_id=${this.userDetails?.userId}&message=${form.value.message}&timestamp=${time}`).subscribe(res => {
        this.chatText = ''
      },
        error => {
          this.toasterService.error(error?.error?.message)
        })
    }
    else {
      this.http.postChat(`updateMessage?id=${this.editId}&message=${form.value.message}`).subscribe(res => {
        this.chatText = ''
        this.editMsg = false
      },
        error => {
          this.toasterService.error(error?.error?.message)
        })
    }
  }

  searchTerm(event: any) {
    if (!event.target.value) {
      return
    }
    else {
      this.http.getChat(`getUsers?keyword=${event?.target?.value}`, true).subscribe((res: any) => {
        let users: any = []
        res?.data?.map(v => {
          if (v?.id == this.userDetails?.userId) {
            return
          }
          else {
            users.push({
              label: v.name,
              value: v.name,
              id: v.id,
              email: v.email
            })
          }
        })
        this.searchUsers = users
      },
        error => {
          this.toasterService.error(error?.error?.message)
        })
    }
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
    this.http.getChatToken(`getChatList?user_id=${this.userDetails?.userId}`, this.userDetails.authtoken).subscribe((res: any) => {
      this.messageLists = []
      res?.data?.map(v => {
        if (v.from_id == this.userDetails?.userId && v.to_id == this.userDetails?.userId) {
          return
        }
        else {
          this.messageLists.push(v)
        }
      })
      this.userChat(this.messageLists[0])
    },
      error => {
        this.toasterService.error(error?.error?.message)
      })
  }
  deleteMessage(chat) {
    this.http.postChat(`deleteMessage?id=${chat?.id}`).subscribe((res: any) => {
      if (res?.hasOwnProperty('messages')) {
        res?.messages?.map(v => {
          if (v == "Record deleted successfully") {
            this.toaster.success("Message deleted successfully")
          }
        })
      }
    },
      error => {
        this.toasterService.error(error?.error?.message)
      })
  };
  editMessage(chat) {
    this.editMsg = true;
    this.chatText = chat?.message;
    this.editId = chat?.id
  }
  deleteChat(toUser) {
    this.http.postChat(`deleteChat?to_id=${toUser?.to_id}&from_id=${toUser?.from_id}`).subscribe((res: any) => {
      if (res?.hasOwnProperty('messages')) {
        res?.messages?.map(v => {
          if (v == "Chat deleted successfully") {
            this.toaster.success("Chat deleted successfully")
          }
        })
      }
    },
      error => {
        this.toasterService.error(error?.error?.message)
      })
  };
  selectUser(event) {
    this.userChat(event)
  }
}

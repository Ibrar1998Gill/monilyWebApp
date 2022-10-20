import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { ChatUsers } from '../../../shared/model/chat.model';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class chatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public openTab : string = "call";
  public users : ChatUsers[] = []
  public searchUsers : ChatUsers[] = []
  public chatUser : any;
  public profile : any;
  public chatMessages : any;
  public chatText : string;
  public error : boolean = false;
  public notFound: boolean = false;
  public id : any;
  public searchText : string;
  public showEmojiPicker:boolean = false;
  public emojies: any;
  public mobileToggle: boolean = false
  public messageLists:any=[];
  public userDetails:any;
  public toUser:any=[]

  constructor(private chatService: ChatService, private http: AuthService) {   
    this.chatService.getUsers().subscribe(users => { 
      this.searchUsers = users
      this.users = users
    })
  }
  ngOnInit() {
    this.getProfile()
    this.getRecentUser()
  }

  public toggleEmojiPicker(){
    this.showEmojiPicker=!this.showEmojiPicker;
  }

  addEmoji(event){
    const text = `${event.emoji.native}`;
    this.chatText = text;
    this.showEmojiPicker = false;
  }

  public tabbed(val) {
  	this.openTab = val
  }

  // Get user Profile
  public getProfile() {
    this.chatService.getCurrentUser().subscribe(userProfile => this.profile = userProfile)
  }

  // User Chat
  public userChat(user){  
    this.toUser = user  
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    this.http.getChat(`getChat?to_id=${this.toUser?.to_id == this.userDetails?.userId ? this.toUser?.from_id : this.toUser?.to_id}&from_id=${this.userDetails?.userId}`,true).subscribe((res:any)=>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      this.chatMessages = res?.data?.data
      setTimeout(() => {
        this.scrollToBottom()
      }, 1000);
    }),err=>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
  
  // Send Message to User
  public sendMessage(form) {
    if(!form.value.message){
      this.error = true
      return false
    }
    this.error = false
    let chat = {
      sender: this.profile.id,
      receiver: this.chatUser.id,
      receiver_name: this.chatUser.name,
      message: form.value.message
    }
    this.chatService.sendMessage(chat) 
    this.chatText = ''
    this.chatUser.seen = 'online'
    this.chatUser.online = true
  }

  searchTerm(term: any) {
    if(!term) return this.searchUsers = this.users
    term = term.toLowerCase();
    let user = []
    this.users.filter(users => {
      if(users.name.toLowerCase().includes(term)) {
        user.push(users)
      } 
    })
    this.searchUsers = user
  }

  mobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
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
    this.userChat(this.messageLists[0])
    }),err=>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
}

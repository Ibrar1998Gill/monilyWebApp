import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public getmessage$: BehaviorSubject<string> = new BehaviorSubject('');
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public online$: BehaviorSubject<string> = new BehaviorSubject('');
  public offline$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {
  }
  options = {
    rememberUpgrade:true,
    secure:true,
    rejectUnauthorized: false
        }
  // socket = io('https://monily-mobile-app.herokuapp.com');
  public socket = io('http://192.168.1.103:3000');

  public sendMessage(messageInfo) {
    this.socket.emit('message', messageInfo);
  }

  public getNewMessage = () => {
    this.socket.on('message', (messageInfo, socket) =>{
      this.message$.next(messageInfo);
    });

    return this.message$.asObservable();
  };
  public getMessage = () => {
    this.socket.on('message', (messageInfo, socket) =>{
      this.getmessage$.next(messageInfo);
    });

    return this.message$.asObservable();
  };
  public typing({ user, status }) {
    this.socket.emit('typing', { user, status });
  }
  public display() {
    return Observable.create((observer) => {
      this.socket.on('typing', (typing) => {
        observer.next(typing);
      });
    });
  }
  public online({ user }) {
    this.socket.emit('online', { user });
  }
  public offline({ user }) {
    this.socket.emit('offline', { user });
  }
  public onlineStatus() {
    this.socket.on('online', (user) => {
      this.online$.next(user);
    });

    return this.online$.asObservable();
  }
  public offlineStatus() {
    this.socket.on('offline', (user) => {
      this.offline$.next(user);
    });

    return this.offline$.asObservable();
  }

}

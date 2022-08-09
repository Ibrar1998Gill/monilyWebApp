import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-image-two',
  templateUrl: './image-two.component.html',
  styleUrls: ['./image-two.component.scss']
})
export class LoginImageTwoComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}

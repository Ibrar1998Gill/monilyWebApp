import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class LoginSimpleComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}

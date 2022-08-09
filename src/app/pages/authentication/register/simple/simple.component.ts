import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class RegisterSimpleComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}

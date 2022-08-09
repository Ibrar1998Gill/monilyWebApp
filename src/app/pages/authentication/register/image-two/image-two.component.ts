import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-image-two',
  templateUrl: './image-two.component.html',
  styleUrls: ['./image-two.component.scss']
})
export class RegisterImageTwoComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-image-one',
  templateUrl: './image-one.component.html',
  styleUrls: ['./image-one.component.scss']
})
export class RegisterImageOneComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.scss']
})
export class UnlockUserComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}

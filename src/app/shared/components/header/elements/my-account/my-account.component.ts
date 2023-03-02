import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/shared/services/local.service';
import { UniversalService } from 'src/app/shared/services/universal.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(public authService: AuthService, private localService: LocalService) { }
  user:any;
  ngOnInit() {
    this.getData()
  }
  getData(){
    this.user = this.localService.getJsonValue('authUser')
  }
  logout() {
    this.authService.SignOut();
    UniversalService.logout.next(true)
  }
  permissionModal(){
    UniversalService.permissionModal.next(true)
  }
}

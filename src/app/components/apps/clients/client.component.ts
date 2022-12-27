import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { AuthService } from '../../../shared/services/firebase/auth.service';
import { LocalService } from '../../../shared/services/local.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class clientComponent implements OnInit {
  path:string 
  constructor(private http: AuthService, private localService: LocalService, private toasterService: ToastrService, private location:Location) { }
  ngOnInit(): void {
    this.path = location.pathname.split('/')[2]
  } 
}

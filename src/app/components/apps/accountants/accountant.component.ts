import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { AuthService } from '../../../shared/services/firebase/auth.service';
import { LocalService } from '../../../shared/services/local.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.scss']
})

export class AccountantComponent implements OnInit {
  path: string;
  accountant = this.fb.group({
    name: [null],
    email: [null],
    phone: [null],
    role: [null],
  });
  roles: Array<Object> = [];
  selectedRole: string;
  constructor(private http: AuthService, private localService: LocalService, private toasterService: ToastrService, private location: Location, private fb: FormBuilder) {
    this.accountant = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      phone: [null, Validators.required],
      role: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.path = location.pathname.split('/')[2]
    this.getRoles()
  }
  create() {
    this.http.postUsers('user/create', this.accountant.value).subscribe(res=>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    }),err=>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
  getRoles() {
    this.http.getUsers('role/all', true).subscribe((res: any) => {
      this.roles = res?.data
    }), err => {
      console.log(err);
    }
  }
}

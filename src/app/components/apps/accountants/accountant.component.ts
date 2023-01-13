import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { AuthService } from '../../../shared/services/firebase/auth.service';
import { LocalService } from '../../../shared/services/local.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { debounce } from 'lodash';

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
    password: [null],
    is_active: 1
  });
  roles: Array<Object> = [];
  selectedRole: string;
  constructor(private help:HelperService,private http: AuthService, private localService: LocalService, private toasterService: ToastrService, private location: Location, private fb: FormBuilder) {
    this.accountant = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      phone: [null, Validators.required],
      role: [null, Validators.required],
      is_active: 1,
      password: [null, Validators.required]
    });
  }
  ngOnInit(): void {
    this.path = location.pathname.split('/')[2]
    this.getRoles()
  }
  create() {
    this.http.postUsers('user/create', this.accountant.value).subscribe((res:any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      this.toasterService.success(res?.data?.message)
    },
    error => {
      this.toasterService.error(error)
    })
  }
  getRoles() {
    this.http.getUsers('role/all', true).subscribe((res: any) => {
      this.roles = res?.data
    },
    error => {
      this.toasterService.error(error)
    })
  }
  change(event){
    return this.help.numberOnly(event)
  }
}

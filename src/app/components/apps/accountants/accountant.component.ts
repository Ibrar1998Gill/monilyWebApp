import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/services/auth.service';
import { LocalService } from '../../../shared/services/local.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id;
  roles: Array<Object> = [];
  selectedRole: string;
  constructor(private route: ActivatedRoute, private router: Router, private help: HelperService, private http: AuthService, private localService: LocalService, private toasterService: ToastrService, private location: Location, private fb: FormBuilder) {
    if (this.route.snapshot.paramMap.get("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.getUser();
    }
  }
  ngOnInit(): void {
    this.path = location.pathname.split('/')[2]
    this.getRoles()
  }
  getUser() {
    this.http.getUsers(`user/${this.id}`, true).subscribe((res: any) => {
      if (res?.data) {
        this.accountant = this.fb.group({
          email: [res?.data?.email, [Validators.required, Validators.email]],
          name: [res?.data?.name, Validators.required],
          phone: [res?.data?.phone, Validators.required],
          role: [res?.data?.roles[0]?.name, Validators.required],
          password: [null, Validators.required],
          is_active: 1
        });
      }
    }, error => {
      this.toasterService.error(error?.error?.message)
    })
  }
  create() {
    this.http.postUsers('user/create', this.accountant.value).subscribe((res: any) => {
      this.toasterService.success(res?.message)
      this.router.navigate(['accountants']);
    },
      error => {
        this.toasterService.error(error?.error?.message)
      })
  }
  update() {
    console.log('====================================');
    console.log(this.accountant.value);
    console.log('====================================');
    this.http.postUsers(`user/update/${this.id}`, this.accountant.value).subscribe((res: any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      this.toasterService.success(res?.message)
    },
      error => {
        this.toasterService.error(error?.error?.message)
      })
  }
  getRoles() {
    this.http.getUsers('role/all', true).subscribe((res: any) => {
      this.roles = res?.data
    },
      error => {
        this.toasterService.error(error?.error?.message)
      })
  }
  change(event) {
    return this.help.numberOnly(event)
  }
}

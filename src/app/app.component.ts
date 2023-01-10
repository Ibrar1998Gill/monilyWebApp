import { Component, PLATFORM_ID, Inject, ChangeDetectorRef, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { map, delay, withLatestFrom } from 'rxjs/operators';
import { PushNotificationService } from 'ng-push-notification';
import { io } from 'socket.io-client';
import { UniversalService } from './shared/services/universal.service'
import * as $ from 'jquery'
import { AuthService } from './shared/services/firebase/auth.service';
import { LocalService } from './shared/services/local.service';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from './shared/services/helper.service';
declare var require
const Swal = require('sweetalert2')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // socket = io('https://monily-mobile-app.herokuapp.com');
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  companies: any = [];
  companySelected: any = null;
  selectedPermissions: Array<Object> = [];
  selectedRole: any;
  roles: Array<Object>;
  permissions: Array<Object>;
  // For Progressbar
  loaders = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );
  userDetails: any;
  companyFound: boolean = false
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private loader: LoadingBarService,
    private pushNotification: PushNotificationService,
    private cd: ChangeDetectorRef,
    private localService: LocalService,
    private authService: AuthService,
    private toasterService: ToastrService,
    private http: AuthService,
    private help: HelperService) {
  }
  ngOnInit() {
    this.companySelected = null
    this.observe()
    this.getData()
    if (this.localService.getJsonValue('company') == null) {
      this.getRecentUser()
    }
    // this.socket.on('message', (messageInfo) => {
    //   var msg = JSON.parse(messageInfo)
    //   if (msg?.to_id == this.userDetails?.userId) {
    //     this.showPush(msg)
    //   }
    // });
  }
  getRecentUser() {
    this.userDetails = this.localService.getJsonValue('authUser')
    if (this.userDetails) {
      UniversalService.companyModal.next(true)
      if (this.userDetails.hasOwnProperty('qbconfig')) {
        this.companyFound = true;
        this.companies = []
        this.userDetails.qbconfig.map((v: any) => {
          this.companies.push(v)
        })
      }
      else {
        this.companyFound = false;
        setTimeout(() => {
          this.error("No Company Found")
        }, 500);
      }
    }
  }
  showPush(messageInfo) {
    this.pushNotification.show(
      `${messageInfo?.message}`,
      {
        icon: '../assets/images/logo/logo-icon.png',
      },
      8000, // close delay.
    );
  }
  error(message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      showCancelButton: false,
      confirmButtonText: `Logout`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout()
      }
    })
  }
  async observe() {
    UniversalService.login.subscribe((res: any) => {
      if (res) {
        this.getRecentUser()
      }
      else {
        return
      }
    })
    UniversalService.companyModal.subscribe((res: any) => {
      setTimeout(() => {
        if (res && this.companyFound) {
          $("#companyModal").trigger('click')
        }
        else {
          $("#closeModal").trigger('click')
        }
      }, 500);
      this.cd.detectChanges();
    })
    UniversalService.logout.subscribe((res: any) => {
      if (res) {
        this.companySelected = null
      }
      else {
        return
      }
    })
    UniversalService.permissionModal.subscribe((res: any) => {
      if (res) {
        $("#permissionModal").trigger('click')
      }
      else {
        return
      }
    })
  }
  logout() {
    this.authService.SignOut();
    this.companySelected = null
  }
  select() {
    this.localService.setJsonValue('company', this.companySelected);
    UniversalService.companyModal.next(false)
    UniversalService.login.next(false)
    UniversalService.companySelected.next(true)
  }
  checkSelectedPermission() {
    this.selectedPermissions?.map((e: any) => {
      this.checkboxes.forEach((element: any) => {
        if (e == element?.nativeElement?.value) {
          element.nativeElement.checked = true;
        }
        else {
          element.nativeElement.checked = false;
        }
      });
    })
  }
  getData() {
    this.http.getUsers(`permission/all`, true).subscribe((res: any) => {
      let permissions = []
      if (res?.data) {
        res?.data?.map(i => {
          permissions.push(i)
        })
      }
      this.permissions = this.help.getUniqueListBy(permissions, 'name')
    }), err => {
      console.log(err);
    }
    this.http.getUsers('role/all', true).subscribe((res: any) => {
      this.roles = res?.data
      this.selectedRole = res?.data[0]?.name
      this.selectRole(res?.data[0])
    }), err => {
      console.log(err);
    }
  }
  selectRole(event) {
    this.uncheckAll()
    this.selectedRole = event;
    this.selectedRole?.permissions.map(e => {
      this.checkboxes.forEach((element) => {
        if (element.nativeElement.name == e.name) {
          element.nativeElement.checked = true;
        }
      });
    })
  }
  assignPermission() {
    this.http.postUsers(`role/assign-permissions/${this.selectedRole?.id}`, { permissions: this.selectedPermissions }).subscribe((res: any) => {
      this.toasterService.success(res?.message)
      this.uncheckAll()
    }), err => {
      console.log(err);
      this.uncheckAll()
    }
  }
  permissionArray(event) {
    this.selectedPermissions.push(event?.target?.value)
  }
  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
}
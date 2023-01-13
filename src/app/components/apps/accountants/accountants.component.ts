import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { AuthService } from '../../../shared/services/firebase/auth.service';
import { LocalService } from '../../../shared/services/local.service';
import { HelperService } from 'src/app/shared/services/helper.service';
// import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-accountants',
  templateUrl: './accountants.component.html',
  styleUrls: ['./accountants.component.scss']
})

export class AccountantsComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  selectedAccountant: any
  accountantsPage: any;
  total: any;
  permissions;
  selectedPermissions: Array<Object> = [];
  public accountants;
  public roles;
  selectedRole;
  public rights: Array<Object> = [
    { item: 'dashboard' },
    { item: 'expenses' },
    { item: 'accounts payable' },
    { item: 'accounts recievable' },
    { item: 'financial statement' },
    { item: 'accountants' },
    { item: 'clients' },
    { item: 'companies' },
    { item: 'documents' },
    { item: 'edit data' },
    { item: 'add data' },
    { item: 'role assign' }
  ]
  constructor(private http: AuthService, private localService: LocalService, private toasterService: ToastrService, private help: HelperService) { }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.http.getUsers('user/all', true).subscribe((res: any) => {
      this.accountants = res?.data?.data.reverse()
    },
    error => {
      this.toasterService.error(error)
    })
  }
  selectAccountant(item: any) {
    this.selectedAccountant = item
  }
  permissionArray(event) {
    this.selectedPermissions.push(event?.target?.value)
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
  selectRole(event) {
    this.selectedRole = event;
  }
}

import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { AuthService } from '../../../shared/services/firebase/auth.service';
import { LocalService } from '../../../shared/services/local.service';
import { HelperService } from 'src/app/shared/services/helper.service';

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
  getData(){
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
    this.http.getUsers('user/all', true).subscribe((res: any) => {
      this.accountants = res?.data?.data
    }), err => {
      console.log(err);
    }
  }
  selectAccountant(item) {
    this.selectedAccountant = item
  }
  permissionArray(event) {
    this.selectedPermissions.push(event?.target?.value)
  }
  assignPermission() {
    this.http.postUsers(`role/assign-permissions/${this.selectedAccountant?.id}`, { permissions: this.selectedPermissions }).subscribe((res: any) => {
      this.toasterService.success(res?.message)
      this.uncheckAll()
    }), err => {
      console.log(err);
      this.uncheckAll()
    }
  }
  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
  checkSelectedPermission(){
    this.selectedPermissions?.map((e:any)=>{
      this.checkboxes.forEach((element:any) => {
        if(e == element?.nativeElement?.value){
          element.nativeElement.checked = true;
        }
        else{
          element.nativeElement.checked = false;
        }
      });
    })
  }
}

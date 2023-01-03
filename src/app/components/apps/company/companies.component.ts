import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { AuthService } from '../../../shared/services/firebase/auth.service';
import { LocalService } from '../../../shared/services/local.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class companiesComponent implements OnInit {
  selectedAccountant: any
  accountantsPage: any;
  total: any;
  public accountants:Array<Object> = [
    {
      name:'Wajiha',
      companyName:"Monily",
      role:'Admin',
      phone:'+92311293847',
      status:'Activate',
      email:'wajiha@arthurlawrence.net'
    },
    {
      name:'Fahim',
      companyName:"Monily",
      role:'user',
      phone:'+92311293847',
      status:'Activate',
      email:'fahim@arthurlawrence.net'
    },
    {
      name:'Farwah',
      companyName:"Monily",
      role:'user',
      phone:'+92311293847',
      status:'Activate',
      email:'farwah@arthurlawrence.net'
    },
    {
      name:'Ahmed',
      companyName:"Monily",
      role:'Admin',
      phone:'+92311293847',
      status:'Deactivate',
      email:'ahmed@arthurlawrence.net'
    }
  ]
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
  constructor(private http: AuthService, private localService: LocalService, private toasterService: ToastrService) { }
  ngOnInit(): void {
    
  }
  selectAccountant(item){
    this.selectedAccountant = item
  }
}

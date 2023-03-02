import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LocalService } from 'src/app/shared/services/local.service';
import * as moment from 'moment';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})

export class documentsComponent implements OnInit {
  fileName = '';
  public commentForm: FormGroup;
  public searchbynameForm: FormGroup;
  public filesData: any = []
  startDate: any;
  endDate: any;
  date: { year: number, month: number };
  selectSortDropDown;
  currentDate;
  Reset: boolean = false;
  fileNames:any=[]
  selectedName:string
  // searchByName:string;
  sortDate: any = [
    { value: "Sort by latest" },
    { value: "Sort by earlier" },
  ];
  constructor(private helperService: HelperService, private httpService: AuthService, private localService: LocalService,
    private fb: FormBuilder) {
    this.searchbynameForm = this.fb.group({
      searchByName: [null, [Validators.required]]
    });
  }
  public authToken = this.localService.getJsonValue('authUser')

  ngOnInit(): void {
    this.getImages()
    this.selectSortDropDown = this.sortDate[0].value
    this.startDate = null
    this.endDate = null
  }
  onFileSelected(event) {
    this.helperService.uploadImage(event, "reven")
  }
  getImages() {
    this.httpService.getChatToken(`getFiles?user_id=${this.authToken.userId}`, this.authToken.authtoken).subscribe((res: any) => {
      this.filesData = this.sortData(res.data.data)
      this.fileNames=[]
      this.filesData?.map(e=>{
        this.fileNames.push(e.original_filename)
      })
      this.Reset = false
    }), err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
  sortData(data) {
    return data.sort((a, b) => {
      return <any>new Date(b.created_at) - <any>new Date(a.created_at);
    });
  }
  selectSort() {
    if (this.selectSortDropDown == "Sort by latest") {
      return this.filesData.sort((a, b) => {
        return <any>new Date(b.created_at) - <any>new Date(a.created_at);
      });
    }
    else {
      return this.filesData.sort((a, b) => {
        return <any>new Date(a.created_at) - <any>new Date(b.created_at);
      });
    }
  }
  searchDate() {
    let start: any = moment(this.startDate).format('YYYY-MM-DD')
    let end: any = moment(this.endDate).format('YYYY-MM-DD')
    this.httpService.getChatToken(`getFiles?user_id=${this.authToken.userId}`, this.authToken.authtoken).subscribe((res: any) => {
      this.filesData = []
      res.data.data.map(d => {
        var time = moment(d.created_at).format('YYYY-MM-DD');
        if (start < time && time < end) {
          this.filesData.push(d)
        }
      })
    }), err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
  searchByName() {
    this.httpService.getChatToken(`getFiles?user_id=${this.authToken.userId}`, this.authToken.authtoken).subscribe((res: any) => {
      if (this.searchbynameForm.controls['searchByName'].value == '') {
        this.filesData = this.sortData(res.data.data)
      }
      else {
        this.filesData = []
        res.data.data.map(e => {
          if (
            e.original_filename.toLowerCase().includes(this.selectedName.toLowerCase())
            // e.original_filename.toLowerCase() == this.searchbynameForm.controls['searchByName'].value.toLowerCase()
            ) {
              this.filesData.push(e)
            }
          });
          this.Reset = true
        }
    }), err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }
}

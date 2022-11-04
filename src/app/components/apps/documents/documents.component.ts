import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
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
  public filesData: any = []
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  date: { year: number, month: number };
  constructor(private helperService: HelperService, private httpService: AuthService, private localService: LocalService,
    private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      comment: [null, [Validators.required]]
    });
  }
  public authToken = this.localService.getJsonValue('authUser')

  ngOnInit(): void {
    this.getImages()
  }
  onFileSelected(event) {
    this.helperService.uploadImage(event, "reven")
  }
  getImages() {
    this.httpService.getChat(`getFiles?user_id=${this.authToken.userId}`, true).subscribe((res: any) => {
      this.filesData = this.sortData(res.data.data)
      // this.filesData = res.data.data;
      console.log('====================================');
      console.log(this.filesData, res.data.data);
      console.log('====================================');
      this.filesData.map((e: any) => {
        console.log('====================================');
        console.log(moment(e.created_at).format(("YYYY-MM-DD")));
        console.log('====================================');
      })
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
  searchDate() {
    console.log(this.startDate, this.endDate)
    let start: any = moment(this.startDate).format('YYYY-MM-DD')
    let end: any = moment(this.endDate).format('YYYY-MM-DD')
    const result = this.filesData.filter(d => {
      var time = moment(d.created_at).format('YYYY-MM-DD');
      console.log('====================================');
      console.log(start,time,end);
      console.log('====================================');
      return (start < time && time < end);
    });
    console.log(result);
    // console.log('====================================');
    // console.log(this.filesData);
    // console.log('====================================');
  }
}

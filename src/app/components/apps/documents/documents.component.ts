import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})

export class documentsComponent implements OnInit {
  fileName = '';
  constructor(private helperService: HelperService) { }
  ngOnInit(): void {
    // this.upload('hh')
  }
  onFileSelected(event) {
    this.helperService.uploadImage(event, "reven")
  }
}

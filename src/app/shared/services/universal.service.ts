import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  public static companyModal:Subject <any> = new Subject <any>();
  constructor() { }
}

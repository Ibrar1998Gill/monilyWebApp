import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-login-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetalertComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.loginForm = fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

  signIn() {
    if(!this.loginForm.value.email || !this.loginForm.value.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email and password is required.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Logged In successfully.',
      });
    }
  }

}

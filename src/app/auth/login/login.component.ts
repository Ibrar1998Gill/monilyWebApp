import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversalService } from 'src/app/shared/services/universal.service';
import { AuthService } from '../../shared/services/firebase/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;
  public showLoader: boolean = false;
  constructor(public authService: AuthService, private fb: FormBuilder, private ngZone: NgZone, private router: Router) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }
  loginData: any;
  showPassword() {
    this.show = !this.show;
  }
  // Simple Login
  login() {
    this.showLoader = true;
    this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']).subscribe((res: any) => {
      console.log('====================================');
      console.log(res.user);
      console.log('====================================');
      this.loginData = {
        authtoken: res?.user?.authtoken,
        userId: res?.user?.id,
        name: res?.user?.name,
        email: res?.user?.email,
        qbconfig: res?.qb_config
      }
      localStorage.setItem('authUser', JSON.stringify(this.loginData))
      UniversalService.companyModal.next(true)
      UniversalService.login.next(true)
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']);
      })
    this.showLoader = false;
      //       });
    }), err => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }
  }

}

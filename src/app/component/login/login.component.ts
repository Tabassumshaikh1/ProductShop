import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errMsg: any;
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private authSer: AuthService, private router: Router) {}
  mydata: any;
  ngOnInit(): void {}
  postData() {
    let formData = this.myForm.getRawValue();
    this.authSer.getuserdetails(formData.email).subscribe((data) => {
      this.mydata = data;
      console.log(this.mydata);
    });
    console.log('email' + formData.email);
    this.authSer.postLogin(formData).subscribe((res: any) => {
      if (res.err == 0) {
        localStorage.setItem('_token', res.token);
        localStorage.setItem('userdata', JSON.stringify(this.mydata));
        this.router.navigate(['/mydata']).then(() => {
          window.location.reload();
        });
      }
      if (res.err == 1) {
        this.errMsg = res.msg;
      }
    });
    console.log(formData);
  }
}

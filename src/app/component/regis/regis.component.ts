import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css'],
})
export class RegisComponent {
  errMsg: any;
  succMsg: any;
  constructor(private authser: AuthService) {}
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+$'),
      Validators.minLength(2),
      Validators.maxLength(15),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
      Validators.pattern('[a-zA-Z ]+$'),
    ]),
    contactNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('[6-9][0-9]'),
    ]),
  });

  postData() {
    let formData = this.myForm.getRawValue();
    this.authser.postRegis(formData).subscribe((res: any) => {
      if (res.err == 0) {
        this.succMsg = res.msg;
      }

      if (res.err == 1) {
        this.errMsg = res.msg;
      }
    });
  }
  fdata() {
    return this.myForm.controls;
  }
}

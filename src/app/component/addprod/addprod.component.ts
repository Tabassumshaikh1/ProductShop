import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppiiService } from 'src/app/service/appii.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css'],
})
export class AddprodComponent implements OnInit {
  prodsucc: boolean = false;
  prodmsg: any;
  constructor(private ser: AppiiService, private router: Router) {}
  mydata1 = { name: '', price: '', quantity: '', description: '', img: '' };
  ngOnInit(): void {}

  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+$'),
      Validators.minLength(2),
      Validators.maxLength(15),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9][0-9]+$'),
      Validators.maxLength(7),
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]+$'),
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+$'),
      Validators.maxLength(100),
    ]),
    img: new FormControl('', [Validators.required]),
  });
  get fdata() {
    console.log(this.myForm.controls);
    return this.myForm.controls;
  }

  postdata() {
    console.log('Add function is called');
    console.log(this.fdata);
    this.ser.postData(this.myForm.value).subscribe((res) => {
      console.log(res);
      if (res) {
        // alert("data is added");
        this.prodsucc = true;
        this.prodmsg = 'Product is Added';
      }
    });
  }
  addfun() {
    this.prodsucc = false;
    this.router.navigate(['/mydata']);
    window.location.reload;
  }
}

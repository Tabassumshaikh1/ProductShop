import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { AppiiService } from 'src/app/service/appii.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loggedIn!: boolean;
  logsucc: boolean = false;
  logmsg: string = '';
  isAdmin!: boolean;
  count = 0;
  userdata!: any;

  data: any = localStorage.getItem('userdata');
  constructor(
    private pser: AppiiService,
    private authSer: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userdata = JSON.parse(this.data);
    console.log(this.userdata);
    if (localStorage.getItem('mycart') != undefined) {
      let cdata: any = localStorage.getItem('mycart');
      let data = JSON.parse(cdata);
      this.count = data.length;
    }
    this.pser.subject.subscribe((res: any) => {
      let data = res.cartdata;
      this.count = data.length;
      console.log(data);
    });
    this.loggedIn = this.authSer.isLoggedIn();
    this.isAdmin = this.authSer.isAdmin();
  }

  signOut() {
    this.logsucc = true;
    // if(confirm("Do u want to logout ?")){
    this.logmsg = 'Logout Successfull';
    this.authSer.logout();
    // }
  }

  logfun() {
    this.logsucc = false;
    this.router.navigate(['/home']);
  }
}

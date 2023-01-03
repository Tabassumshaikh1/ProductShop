import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { urlencoded } from 'express';
import { count } from 'rxjs';
import { AppiiService } from 'src/app/service/appii.service';
import { AuthService } from 'src/app/service/auth.service';

declare var window: any;

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css'],
})
export class MydataComponent implements OnInit {
  userData: any;
  totaleLength: number | undefined;
  page: number = 1;
  formModel: any;

  isAdmin!: any;

  constructor(
    private pser: AppiiService,
    private router: Router,
    private authSer: AuthService
  ) {}
  ngOnInit() {
    this.pser.getAllProduct().subscribe((data: any = []) => {
      this.userData = data;
      console.log(data);
      this.totaleLength = data.length;
    });
    this.isAdmin = this.authSer.isAdmin();
    this.formModel = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }
  delsucc: any = false;
  delmsg: string = '';
  deletepro(id: any) {
    // ("do u want to delete")
    // confirm("do u want to delete ?")
    // if(this.delsucc){
    this.pser.deleteData(id).subscribe((res: any) => {
      if (res) {
        // alert("data is deleted")

        let data = this.userData.filter((user: any) => user._id != id);
        this.userData = data;
        this.delsucc = true;
        this.delmsg = 'Product is deleted';
        window.location.reload;
      }
    });
    // }
  }

  // addtocartitems(id:any){

  //   this.count=this.count+1
  //   this.pser.getbyid(id).subscribe((res)=>{
  //     console.log(res)
  //     console.log(this.count)
  //     alert("data is added")

  //   })

  // }
  err: boolean = false;
  errMsg!: string;
  succMsg!: string;
  addtocartitems(id: any) {
    console.log('id is ' + id);
    let arr: any = [];
    if (localStorage.getItem('mycart') != undefined) {
      let cdata: any = localStorage.getItem('mycart');
      let arr = JSON.parse(cdata); //convert into obj

      if (arr.includes(id)) {
        this.err = true;
        if (this.err == true) {
          this.errMsg = 'Product Already in a cart';
        }
        // setInterval(()=>{
        //     this.err=false;
        // },10000)
      } else {
        arr.push(id);
        localStorage.setItem('mycart', JSON.stringify(arr));
        this.succMsg = 'Add Cart Succuessfully';

        this.pser.setcart(arr);
      }

      // alert(arr.length)
    } else {
      arr.push(id);

      localStorage.setItem('mycart', JSON.stringify(arr));
      console.log(arr);
      this.succMsg = 'Add Cart Succuessfully';
      this.pser.setcart(arr);
    }
  }
  errFun() {
    this.err = false;
    window.location.reload();
  }

  searchtext: string = '';
  onsearchtextentered(data: string) {
    this.searchtext = data;
    // console.log(this.searchtext)
  }
  delfun() {
    this.delsucc = false;
    window.location.reload();
    // this.router.navigate(['/mydata'])
  }
}

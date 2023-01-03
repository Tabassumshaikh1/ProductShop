import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit{
  loggedIn!:any
  isAdmin!:any
  constructor(private authSer:AuthService){}
  ngOnInit(): void {
   this.loggedIn=this.authSer.isLoggedIn();
  this.isAdmin=this.authSer.isAdmin()
  }


  
}

import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

// import {AppiiService} from './service/appii.service'
// import {AppiiService} from './service/appii.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn!:any
  constructor(private auth:AuthService){
  this.loggedIn=this.auth.isLoggedIn()
  }
  // constructor(private user:AppiiService){
  //   this.user.getData().subscribe(data=>{
  //     console.warn(data)
  //   })
  // constructor(private de:AppiiService){
  //   this.de.getData().subscribe((data)=>{
  //     console.warn(data)
  //   })
  // }
  }

  // title = 'practice';
  // fname:string="Tabassum Hamid shaikh"
  // // no : number=1
  // book:string="green"
  // imgurl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9c-nBtMx3YXym6E7WRx_nM21eayBqeeha7nZlKGYN&s"
  // abc(){
  //  console.log("welcome")
   
  // }
  // course : string[]=['java','python','sql','mongo']


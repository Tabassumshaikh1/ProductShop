import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router'; 

import { AppiiService } from 'src/app/service/appii.service';
import { MydataComponent } from '../mydata/mydata.component';


@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit{
  id:any;
  res:any={name:'',price:'',quantity:'',description:'',img:''}
 
  constructor(private pser:AppiiService,private router:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
 
  this.id = this.router.snapshot.paramMap.get('id')
  console.log(this.id)
  this.pser.getbyid(this.id)
  .subscribe(data=>{
  console.log(typeof(data))
  this.res=data;
  console.log(this.res.name)
    this.res={
    name:this.res.name,
    price:this.res.price,
    quantity:this.res.quantity,
    description:this.res.description,
    img:this.res.img
    }
  })
  }
updateerr:boolean=false
updatemg:string=""
  updateData(){
    console.log(this.res)
    console.log(this.router.snapshot.paramMap.get('id'))
    this.pser.updateData(this.router.snapshot.paramMap.get('id'),this.res)
    .subscribe(res=>{
      if(res){
          // alert("Data Updated");
          this.updateerr=true
          this.updatemg="Data is Updated"
          this.res={name:'',price:'',quantity:'',description:'',img:''}
          this.pser.getAllProduct()
               .subscribe((res:any)=>{
               this.res=res;
          })
          // this.route.navigate(['/'])
      }
    })
  }
  upfun(){
    this.updateerr=false
    this.route.navigate(['/mydata'])
  }
  myForm= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]),
    mobile:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]) ,
    
  })
  }




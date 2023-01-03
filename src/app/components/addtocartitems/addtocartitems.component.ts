import { Component, OnInit } from '@angular/core';
import { AppiiService } from 'src/app/service/appii.service';

@Component({
  selector: 'app-addtocartitems',
  templateUrl: './addtocartitems.component.html',
  styleUrls: ['./addtocartitems.component.css']
})
export class AddtocartitemsComponent implements OnInit {

 prodata:any;
 mydata:any=[]
array:any=[]
  constructor(private srv:AppiiService){}
  ngOnInit(): void {
    let data:any = localStorage.getItem('mycart')//id form[]
    console.log("data is"+data)
    

     this.array=JSON.parse(data)//data is in json form
    console.log("array is"+this.array)
    this.array.forEach((result:any) => {//id
      this.srv.getbyid(result).subscribe((res)=>{
        console.log("result is "+result)
        if(res){
          console.log(res)
          this.prodata=res//object data
          
        }
        console.log("prodata array is "+ this.prodata)
        this.mydata.push(this.prodata)//actual data
        console.log("mydata array is "+ this.mydata)
        console.log("mydata is "+ this.mydata)
      
      })
    });  
  }

  deletepro(id1:any){
    console.log(id1)
  
    this.mydata.forEach((val:any,ind:any)=>{
      if(id1==this.mydata[ind]._id)
      {
        this.mydata.splice(ind,1);
        console.log(this.mydata);
        this.array.splice(ind,1)
        localStorage.removeItem('mycart')
        localStorage.setItem('mycart',JSON.stringify(this.array))
        this.srv.setcart(this.mydata)
      }
     
    })
    
   
   
      

  }
  

}

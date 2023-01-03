import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { AppiiService } from 'src/app/service/appii.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id:any;
  res:any={name:'',price:'',quantity:'',description:'',img:''}
  
  constructor(private pser:AppiiService,private route: ActivatedRoute) {
  }

    ngOnInit(): void {
      this.route.params.subscribe(params=>{
        let id = params['id'];
        console.log(id)

        this.pser.getbyid(id)
        .subscribe((res:any)=>{
        this.res=res;
        console.log(this.res)
   })

    })
    
    
  }


}
//  this.pser.updateData(this.router.snapshot.paramMap.get('id'),this.res)
//     .subscribe(res=>{
//       if(res){
//           alert("Data Updated");
//           this.res={name:'',price:'',quantity:'',description:'',img:''}
       
//           this.route.navigate(['/'])
//       }
//     })
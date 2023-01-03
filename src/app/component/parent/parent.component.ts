import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges{
  constructor(){
    console.log("constructor is called");
  }
  ngOnInit(){
    console.log("ngoninit metjod is called")
  }
  ngOnChanges(change:SimpleChanges){
    console.log("ngonchanges metjod is called")
  }
  value!:string;
  abc(val: { value: string; }){
    this.value=val.value
  }

}

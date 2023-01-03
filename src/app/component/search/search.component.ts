import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTextChanged: any;
  data:any
  constructor(private auth:AuthService){}
  ngOnInit(): void {
   this.data =  this.auth.isLoggedIn()   
  }
  entersearchValue:string='';

@Output() searchTextChange : EventEmitter<string> = new EventEmitter<string>()
onsearchtextexchange(){
  this.searchTextChange.emit(this.entersearchValue)
  
}
}

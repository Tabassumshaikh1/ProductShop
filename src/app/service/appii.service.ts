import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppiiService {
  public subject = new Subject
  
  API="http://localhost:3000/"
 
  constructor(private http : HttpClient){}
  getAllProduct(){
    
    return this.http.get(`${this.API}getproduct`)
  }
  postData(data:any){
  
    return this.http.post(`${this.API}createproduct`,data)
  }
  updateData(id:any,data:any){

    return this.http.put(`${this.API}update/${id}`,data)

  }
  getbyid(id:any){
    return this.http.get(`${this.API}getproduct/${id}`)
  }
  deleteData(id:any){
    return this.http.delete(`${this.API}delete/${id}`)
  }
  
  setcart(data:any){
    this.subject.next({cartdata:data})

  }

 

}

  

  
  // constructor(private http:HttpClient) { }
  // getData(){
  //   let url="https://jsonplaceholder.typicode.com/posts"
  //   return this.http.get(url)
  // }


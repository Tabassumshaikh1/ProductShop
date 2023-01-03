import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSer :AuthService , private router :Router){}
  canActivate(){
   
    if(this.authSer.isLoggedIn()){
      return true;
    }
    else{
      return this.router.navigate(['/'])
    }

  }
  
}

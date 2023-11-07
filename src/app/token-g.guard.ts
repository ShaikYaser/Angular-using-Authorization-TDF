import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGGuard implements CanActivate {
  constructor(private service:ServiceService){}

  canActivate():boolean{
    if(this.service.isLogged()){
      return true;
    }else{
    return false;
  }
}
  
}

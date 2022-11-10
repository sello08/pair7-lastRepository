import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class Step3Guard implements CanActivate {
  constructor(private router:Router,private localStorage:LocalStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!(localStorage.getItem('step')==="stp2")) {
        this.router.navigate(['/customers/stp2']); 
        return false;
      }
    return true;
  }
  
}
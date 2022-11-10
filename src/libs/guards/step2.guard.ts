import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '..';


@Injectable({
  providedIn: 'root'
})
export class Step2Guard implements CanActivate {
  constructor(private localStorage:LocalStorageService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!(localStorage.getItem('step')==="stp1")) {
        this.router.navigate(['/customers/stp1']); 
        return false;
      }
    return true;
  }
  
}
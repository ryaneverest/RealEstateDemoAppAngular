import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../service/users.service';


@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.userService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

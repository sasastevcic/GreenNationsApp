import { Injectable } from "@angular/core";
import { UserService } from './user.service';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(): boolean {
    console.log('CanActivate called ' + this.userService.isAuthenticated);

    if(!this.userService.isAuthenticated) {
      console.log('Unauthorised');
      this.router.navigate(['signin/']);
    }
    return this.userService.isAuthenticated;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}

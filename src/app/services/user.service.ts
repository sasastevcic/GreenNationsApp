import { Injectable } from "@angular/core";
import { UserApi } from 'src/fw/users/user-api';
import { of, Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserService implements UserApi {
  isAuthenticated = false;

  constructor(
    private router: Router
  ) {}

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return of({});
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return of({});
  }
}

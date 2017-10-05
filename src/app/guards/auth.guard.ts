import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GetTokenService } from '../services/get-token.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router,
    public getToken: GetTokenService
  ) { }

  canActivate(): boolean {
    if (this.getToken.token) {
      return true;
    }else {
      this.router.navigate(['/']);
      return false;
    }
  }

}

import { Injectable } from '@angular/core'
import { AuthService } from './services/auth.service'
import { Observable } from 'rxjs'
import {
  Router,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.userIsLoggedIn('userOPENSIPCA')) {
      return true
    }

    this.router.navigate(['auth/login'])
    
    return false
  }
}

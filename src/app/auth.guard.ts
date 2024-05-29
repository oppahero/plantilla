import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from './services/auth.service'
import { inject } from '@angular/core'

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.userIsLoggedIn('userOPENSIPCA')) {
    return true
  }

  router.navigate(['auth/login'])

  return false
}

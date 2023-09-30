import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../modules/auth/services/auth.service";
import {inject} from '@angular/core';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    const authService = inject(AuthService);

    if (authService.isLoggedIn) {
      return true;
    }

    return false;
}
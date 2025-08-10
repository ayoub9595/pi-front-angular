import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  if (accessToken && refreshToken) {
    return true;
  }

  return router.parseUrl('/');
};

export const redirectIfAuthenticatedGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);

  if (authenticationService.isLoggedIn() && authenticationService.isAdmin()) {
    return router.parseUrl('/home/equipements');
  }
  else if (authenticationService.isLoggedIn()) {
    return router.parseUrl('/home/dashboard');
  }

  return true;
};


export const adminGuard = () => {
  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);
  if(authenticationService.isAdmin()) {
    return true;
  }
  return router.parseUrl('/access-denied');
}

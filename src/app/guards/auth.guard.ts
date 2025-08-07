import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  if (accessToken && refreshToken) {
    return true;
  }

  return router.parseUrl('/');
};

export const redirectIfAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    return router.parseUrl('/home/equipements');
  }

  return true;
};

import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');

  const isAuthRequest = req.url.includes('/auth/');

  if (token && !isAuthRequest) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
export const ErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      // Redirect only if the error is 401 Unauthorized
      if (error.status === 401) {
        localStorage.clear()
        router.navigate(['/']);
      }

      return throwError(() => error);
    })
  );
};

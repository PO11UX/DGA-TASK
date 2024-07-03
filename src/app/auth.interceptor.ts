import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  snackBar = inject(MatSnackBar);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const authReq = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': '3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f' 
      }
    });
    return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          this.snackBar.open(error.error.message, 'Close', {
            duration: 5000,
            verticalPosition: 'top'
          });
          return throwError(error);
        })
      );;
  }
}
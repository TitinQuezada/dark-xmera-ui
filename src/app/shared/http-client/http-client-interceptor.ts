import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastService } from '../toast/toast.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(httpRequest).pipe(
      tap(({ body }) => {
        if (body?.error) {
          this.toastService.showError(body?.error.errorMessage);
        }
      })
    );
  }
}

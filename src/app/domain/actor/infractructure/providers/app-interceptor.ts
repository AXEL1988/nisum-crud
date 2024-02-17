import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  private readonly API_KEY = environment.XRapidAPIKey;
  private readonly API_HOST = environment.XRapidAPIHost;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ok: string;
    let request = req;
    request = req.clone({
      setHeaders: {
        'X-apidAPI-Key' : this.API_KEY,
        'X-RapidAPI-Host' : this.API_HOST
      }
    });
    return next.handle(request).pipe(
      tap({
        next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        error: (_error: HttpErrorResponse) => (ok = 'failed')
      }),
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse} from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor( private data: SpinnerService) { }

  intercept(request:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.data.showSpinner();
    return next.handle(request).pipe(tap(
      event => {
        if(event instanceof HttpResponse){this.data.hideSpinner();}
      },
      error => {
        if(error instanceof HttpErrorResponse){
          console.log("InterceptorService :")
          console.log(error);
          this.data.hideSpinner();
        }
      }
    ))
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
//interceptorlar bir işlem yapılırken habire aynı işlemi tekrar etmemizi engeller
//Örn: Her istekte token göndermek gibi interceptorlar bize sen dur yazma ben araya girer hallederim diyor.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  //Burdaki isteğe istediğimiz bir şey koyarsak bütün isteklerimize uygulanır
  //Örn:Headerına token koymak gibi
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    let newRequest: HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });
    return next.handle(newRequest);
  }
}

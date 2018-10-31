import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../_services/auth-service.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthServiceService){
        console.log("in constructor()");

    }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
            console.log("in intercept()");
            const authToken = this.auth.getUserToken();
            const authReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer '+authToken)
            });
        return next.handle(authReq);
    }
}
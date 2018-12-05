import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    private apiUrl = 'environment.apiUrl';
    private authUrl = 'environment.authUrl';

    constructor() { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const tokenReq = this.setTokenHeader(req);
        // const urlReq = this.setUrl(tokenReq);

        return next.handle(tokenReq);
    }

    private setTokenHeader(req: HttpRequest<any>): HttpRequest<any> {
        // const token = localStorage.getItem('token')
        const token = 'a123456789';
        const headers = req.headers.set('Authorization', token);
        const tokenReq = req.clone({ headers: headers })

        return tokenReq;
    }

    // private setUrl(req: HttpRequest<any>): HttpRequest<any> {
    //     let url: string;
    //     if (typeof req === 'string') {
    //         url = this.excludeAssets(req);
    //     } else {
    //         url = this.excludeAssets(req.url);
    //     }
    //     const reqUrl = req.clone({ url: url });
    //     return reqUrl;
    // }

    // private excludeAssets(currentUrl) {
    //     if (currentUrl.includes('/assets/')) {
    //         return currentUrl;
    //     } else if (currentUrl.includes('logout/')) {
    //         return this.authUrl + currentUrl;
    //     } else {
    //         return this.apiUrl + currentUrl;
    //     }
    // }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
​
export enum HttpMethod {
  HTTP_GET,
  HTTP_POST,
  HTTP_PUT,
  HTTP_PATCH,
  HTTP_DELETE
};
​
const AUTH_PREFIX = 'Bearer';
​
@Injectable()
export class HttpHandler {
  private __http: HttpClient;
  private __options: any; 
​
  constructor(http: HttpClient) {
    this.__http = http;
  }
​
  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
​
  private deleteRequest(url: string) {
    return this.__http.delete(url, this.__options).pipe(
        catchError(error => this.handleError(error))
    );
  }
​
  private putRequest(url: string, data: any) {
    return this.__http.put(url, data, this.__options).pipe(
        catchError(error => this.handleError(error))
    );
  }

  private patchRequest(url: string, data: any) {
    return this.__http.patch(url, data, this.__options).pipe(
        catchError(error => this.handleError(error))
    );
  }
​
  private postRequest(url: string, data: any) {      
    return this.__http.post(url, data, this.__options).pipe(
        catchError(error => this.handleError(error))
    );
  }
​
  private getRequest(url: string) {       
    return this.__http.get(url, this.__options).pipe(
        catchError(error => this.handleError(error))      
    );
  }
​
  public setHeader( token?: string ) {   
    //Configurando o Header
    this.__options = {
      headers: new HttpHeaders({
        //'Authorization': `${AUTH_PREFIX} ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    
  }
​
  public callService(url: string, data?: any, method?: HttpMethod): Observable<any> {
    switch (method) {
      case HttpMethod.HTTP_POST:
        console.log('entered here');
        return this.postRequest(url, data);
      case HttpMethod.HTTP_PUT:
        return this.putRequest(url, data);
        case HttpMethod.HTTP_PATCH:
        return this.patchRequest(url, data);
      case HttpMethod.HTTP_DELETE:
        return this.deleteRequest(url);
      default:
        return this.getRequest(url);
    }
  }
}
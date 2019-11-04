// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpHandler, HttpMethod } from '../utils/http-handler.helper';

// @Injectable({
//   providedIn: 'root'
// })
// export class BusinessService extends HttpHandler{

//   uri = 'http://localhost:4000/business';

//   constructor(private http: HttpClient) {
//     super(http);
//   }

//   addBusiness(data){
//     const obj = {
//       person_name: data.person_name,
//       business_name: data.business_name,
//       business_gst_number: data.business_gst_number
//     };
//     console.log(obj);
//     this.callService('http://localhost:4000/business/add', obj, HttpMethod.HTTP_POST);
//   }
// }
// business.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(data){
        const obj = {
          person_name: data.person_name,
          business_name: data.business_name,
          business_gst_number: data.business_gst_number
        };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses(){
    return this
            .http
            .get(`${this.uri}`);
  }

  editBusiness(id){
    let editUrl = `${this.uri}/edit/${id}`;
    console.log(editUrl);
    return this
            .http
            .get(editUrl);
  }

  updateBusiness(data, id){
    const obj = {
      person_name: data.person_name,
      business_name: data.business_name,
      business_gst_number: data.business_gst_number
    };

    let updateUrl = `${this.uri}/update/${id}`;
    console.log(updateUrl);
    this
      .http
      .post(`${this.uri}/update/${id}`, obj);
  }
}
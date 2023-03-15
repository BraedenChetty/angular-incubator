import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  //No login request implemented

  // login(data: any){
  //   this.http.post('', data);
  // }

  addCustomer(data: any){
    return this.http.post('http://localhost:8201/customers', data);
  }

  getAllCustomers(){
    return this.http.get('http://localhost:8201/customers');
  }

  getCustomer(id: any){
    return this.http.get('http://localhost:8201/customers/' + id);
  }

  searchCustomer(search: any){
    return this.http.post('http://localhost:8201/customers/search', search);
  }
}

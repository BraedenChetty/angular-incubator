import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  addBooking(id1: any,id2:any){
    return this.http.post('http://localhost:8080/bookings', [id1, id2]);
  }
}

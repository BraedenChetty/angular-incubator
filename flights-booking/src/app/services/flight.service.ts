import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  addFlight(data: any){
    return this.http.post('http://localhost:8202/flights', data);
  }

  getFlight(id: any){
    return this.http.get('http://localhost:8202/flights/' + id);
  }

  getAllFlights(): Observable<any>{
    return this.http.get('http://localhost:8202/flights');
  }

  getSpecials(){
    return this.http.get('http://localhost:8202/flights/specials');
  }

  searchFlights(search: any){
    return this.http.post('http://localhost:8202/flights/search', search);
  }
}

import { Component, Input,Output, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightService } from '../services/flight.service';
import { CustomerDialogComponent } from '../dialogs/customer-dialog/customer-dialog.component';
import { DetailsComponent } from '../customer/details/details.component';
import { Flight } from '../model/flight';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flight !: Flight;
  displayedColumns: string[] = ['flightNumber', 'origin', 'destination', 'departureTime','arrivalTime' , 'seatsAvailable','action'];
  dataSource !: MatTableDataSource<Flight>

  constructor(private flightService: FlightService,private dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    this.getAllFlights();
  }

  
  getAllFlights(){
    this.flightService.getAllFlights().subscribe({
      next: x => {
        this.dataSource = new MatTableDataSource(x);
      },
      error: x=> {
        alert("Error while retrieving records");
      }
    })
  }

  customerDetails(id: any){
    this.dialog.open(CustomerDialogComponent, {
      width: '30%',
      data: id
    }).afterClosed().subscribe(x => {
      if(x === 'save'){
        this.getAllFlights();
      }
    })
  }

  customerDetailsComponent(id: any){
    const navExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(id)
      }
    }

    this.router.navigate(['/Details'], navExtras);
  };


}

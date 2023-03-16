import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from 'src/app/model/booking';
import {  BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-flight-details-dialog',
  templateUrl: './flight-details-dialog.component.html',
  styleUrls: ['./flight-details-dialog.component.css']
})
export class FlightDetailsDialogComponent implements OnInit {
  bookingForm !: FormGroup;
  detailsForm !: FormGroup;

  constructor(private bookingsService: BookingsService, 
    private dialogRef: MatDialogRef<FlightDetailsDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data[0].id, this.data[1].id)
  }

  addBooking(){
    const newBooking: Booking = {
      customer: this.data[1].id,
      flight: this.data[0].id
    }

    this.bookingsService.addBooking(newBooking).subscribe({
            next: x => {
          
        alert("Booking successfully added");
        },
        error: x=> {
        console.log(x)
          alert("Error occured whilst adding customer");
        }
      })
    }
}

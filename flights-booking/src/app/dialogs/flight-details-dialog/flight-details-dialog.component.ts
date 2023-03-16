import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    // this.customerForm = this.formBuilder.group({
    //   firstName : ['', Validators.required],
    //   lastName : ['', Validators.required],
    //   passportNumber : ['', Validators.required],
    //   email : ['', Validators.required],
    //   phoneNumber : ['', Validators.required],
    // })

  //  console.log(this.data)

   // this.customerForm.controls['queryID'].setValue(this.data.queryID);

       console.log(this.data[0].id, this.data[1].id)
  }

  addBooking(){
     this.bookingsService.addBooking(this.data[1].id,this.data[0].id).subscribe({
             next: x => {
           
         alert("Booking successfully added");
         },
         error: x=> {
          console.log(x)
           alert("Error occured whilst adding customer");
         }
       })
       //console.log(this.data[0].id, this.data[1].id)
     }

 
  //   if(this.customerForm.valid){
  //     this.customerService.addCustomer(this.customerForm.value).subscribe({
  //       next: x => {
  //         alert("Customer successfully added");
  //         this.customerForm.reset;
  //         this.dialogRef.close('send');
  //       },
  //       error: x=> {
  //         alert("Error occured whilst adding customer");
  //       }
  //     })
  //   }
  //   console.log(this.customerForm.value)
  //}

  

}

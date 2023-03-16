import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {  CustomerService } from 'src/app/services/customer.service';
import { FlightDetailsDialogComponent } from '../flight-details-dialog/flight-details-dialog.component';


@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css']
})
export class CustomerDialogComponent implements OnInit {
  customerForm !: FormGroup;

  constructor(private customerService: CustomerService,
    private formBuilder: FormBuilder,private dialog: MatDialog,
    private dialogRef: MatDialogRef<CustomerDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      passportNumber : ['', Validators.required],
      email : ['', Validators.required],
      phoneNumber : ['', Validators.required],
    })

    console.log(this.data)

   // this.customerForm.controls['queryID'].setValue(this.data.queryID);
  }

  addCustomer(){
    if(this.customerForm.valid){
     //const returnvalue=  this.customerService.addCustomer(this.customerForm.value).subscribe(x =>console.log(x) )
    const returnvalue=  this.customerService.addCustomer(this.customerForm.value).subscribe({
        next: x => {
      //    data: any = this.customerService.searchCustomer(this.customerForm.controls['firstName'].value + " " + this.customerForm.controls['lastName'].value)
          console.log(x)
          this.dialog.open(FlightDetailsDialogComponent, {
            width: '50%',
            height: '50%',
            data: [this.data, x]
          });
          this.dialogRef.close('send');
        },
        error: x=> {
          alert("Error occured whilst adding customer");
        }
      })
    }
    console.log(this.customerForm.value)
  }

  customerDetails(id: any){
    this.dialog.open(FlightDetailsDialogComponent, {
      width: '30%',
      data: id
    }).afterClosed().subscribe(x => {
      if(x === 'save'){
        alert("Error occured whilst adding customer");
      }
    })
  }
  

}

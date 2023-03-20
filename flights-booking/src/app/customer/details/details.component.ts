import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  customerForm !: FormGroup;

  constructor(private customerService: CustomerService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      passportNumber : ['', Validators.required],
      email : ['', Validators.required],
      phoneNumber : ['', Validators.required],
    })

  //  console.log(this.data)

   // this.customerForm.controls['queryID'].setValue(this.data.queryID);
  }

  addCustomer(){
    if(this.customerForm.valid){
      this.customerService.addCustomer(this.customerForm.value).subscribe({
        next: x => {
          alert("Customer successfully added");
          this.customerForm.reset;
        },
        error: x=> {
          alert("Error occured whilst adding customer");
        }
      })
    }
    console.log(this.customerForm.value)
  }



}

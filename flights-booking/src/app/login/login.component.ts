import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(){

    if(this.loginForm.controls['username'].value != "" || this.loginForm.controls['password'].value != ""){
      console.log('Great Success');

      // this.userService.login(this.loginForm.value).subscribe({
      //   next: x => {
      //     this.router.navigate(['/home']);
      //   },
      //   error: x => {
      //     alert("Incorrect admin credentials entered");
      //   }
      // })
    }
    else {
      this.snackBar.open(
        "Please enter all required information",
        "X",
        {
          duration: 1000
        }
      )
    }
  }
}

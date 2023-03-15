import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(){
    // this.userService.login(this.loginForm.value).subscribe({
    //   next: x => {
    //     this.router.navigate(['/home']);
    //   },
    //   error: x => {
    //     alert("Incorrect admin credentials entered");
    //   }
    // })

    console.log('Great Success')
  }
}

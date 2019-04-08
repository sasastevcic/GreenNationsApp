import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formEror: string;
  submitting = false;

  constructor(
    private userApi: UserApi,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    if(signInForm.valid) {
      console.log('Submiting...', signInForm);

      this.formEror = null;
      this.submitting = true;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe(data => {
          console.log('got valid ', data);
          this.router.navigate(['authenticated/']);
        },
        err => {
          console.log('got error ', err);
          this.submitting = false;
          this.formEror = err;
        });
    }
  }
}

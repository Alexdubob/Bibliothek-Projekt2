import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInIt {
  signInForm: FormGroup;

  constructor( private fb:FormBuilder){}

  ngOnIt(){
    this.signInForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    })
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  constructor (private router:Router){}

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const enteredUsername = this.loginForm.value.username;
    const enteredPassword = this.loginForm.value.password;

    if (enteredUsername === 'alex' && enteredPassword === '123') {
      alert('Erfolgreich eingeloggt');
      this.router.navigate(['/profile']);

    } else {
      alert('Falsche Anmeldedaten!');
    }
  }
}
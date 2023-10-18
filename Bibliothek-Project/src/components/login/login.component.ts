import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { UserDataService } from 'src/services/UserDataService';
import { UserService } from 'src/services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    errorMessage: new FormControl(null),
  });

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  login() {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (
      usernameControl &&
      passwordControl &&
      usernameControl.value &&
      passwordControl.value
    ) {
      const username = usernameControl.value;
      const password = passwordControl.value;

      this.userService.verifyUser(username, password).subscribe(
        (response) => {
          if (response) {
            this.userService.getUserByUsername(username).subscribe(
              (user) => {
                console.log('Erfolgreich eingeloggt:', user);
                this.userDataService.setUserData(user);
                this.router.navigate(['/profile']);
              },
              (error) => {
                console.error('Fehler beim Abrufen des Benutzers:', error);
              }
            );
          } else {
            console.error('Falsche Login-Daten');
            this.openSnackBar('Falsche Login-Daten', 'Schließen');
          }
        },
        (error) => {
          console.error('Fehler beim Einloggen:', error);
          this.openSnackBar('Fehler beim Einloggen', 'Schließen');
        }
      );
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}

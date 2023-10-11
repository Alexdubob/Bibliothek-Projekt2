import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/services/UserService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  signInForm = this.fb.group(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.passwordMatchValidator }
  );

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  signIn() {
    const username = this.signInForm.get('username')?.value;
    const password = this.signInForm.get('password')?.value;

    this.userService.verifyUser(username, password).subscribe(
      (existingUser) => {
        console.log('Benutzer mit dem Benutzernamen existiert bereits.');
        this.openSnackBar(
          'Benutzername existiert bereits',
          'Schließen'
        );
      },
      (error) => {
        console.log('Neuen Benutzer erstellt.');
        const newUser = {
          id: '',
          username: username,
          password: password,
          animes_finished: [],
          favourite_animes: [],
          animes_watching: [],
          animes_plan_to_watch: [],
        };

        this.userService.createUser(newUser).subscribe(
          (newUser) => {
            console.log('Neuer Benutzer erstellt:', newUser);
            this.openSnackBar(
              'Benutzer erfolgreich erstellt',
              'Schließen'
            );
            this.router.navigate(['/profile'])
          },
          (createError) => {
            console.error('Fehler beim Erstellen des Benutzers:', createError);
            this.openSnackBar(
              'Fehler beim Erstellen des Benutzers'  + createError.message,
              'Schließen'
            );
          }
        );
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

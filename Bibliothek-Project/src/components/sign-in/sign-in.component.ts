import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/UserService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataService } from 'src/services/UserDataService';

interface NewUser {
  Username: string;
  Password: string;
  Animes_finished: string[];
  Favourite_animes: string[];
  Animes_watching: string[];
  Animes_plan_to_watch: string[];
  Id: string;
  Friends: string[];
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private userDataService: UserDataService,
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

  async signIn() {
    console.log("start signIn()")
    const username = this.signInForm.get('username')?.value;
    const password = this.signInForm.get('password')?.value;

    this.userService.checkUserName(username).subscribe(
      (existingUser) => {
        if (existingUser) {
          console.log('Benutzer mit dem Benutzernamen existiert bereits.');
          this.openSnackBar(
            'Benutzername existiert bereits',
            'Schließen'
          );
        } else {
          
          console.log('Neuen Benutzer erstellt.');
          const newUser: NewUser = {
            Username: username,
            Password: password,
            Animes_finished: [],
            Favourite_animes: [],
            Animes_watching: [],
            Animes_plan_to_watch: [],
            Id: "",
            Friends:[],
          };
          console.log(newUser);
          
          
          
          
          this.userService.createUser(newUser).subscribe(
            (createdUser) => {
              console.log('Neuer Benutzer erstellt:', createdUser);
              const username= createdUser.Username;
              this.userDataService.setUserData({ Username: username })
              console.log(this.userDataService)
              this.openSnackBar(
                'Benutzer erfolgreich erstellt',
                'Schließen'
              );
              this.router.navigate(['/profile']);
            },
            (createError) => {
              console.error('Fehler beim Erstellen des Benutzers:', createError);
              this.openSnackBar(
                'Fehler beim Erstellen des Benutzers: ' + createError.message,
                'Schließen'
              );
            }
          );
        }
      },
      (error) => {
        console.error('Fehler beim Überprüfen des Benutzers:', error);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

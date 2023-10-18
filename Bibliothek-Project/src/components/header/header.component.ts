import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { UserDataService } from 'src/services/UserDataService';
import { User } from 'src/models/users';
import { ThemeService } from 'src/services/ThemeService';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public dialog: MatDialog,
    private userDataService: UserDataService,
    private themeService: ThemeService
  ) {}

  openDialog() {
    this.dialog.open(MessageBoxComponent);
  }

  logedIn(): boolean {
    return this.userDataService.getUserData() !== null;
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }


}

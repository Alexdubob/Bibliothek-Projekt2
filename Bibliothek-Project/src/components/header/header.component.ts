import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],


})
export class HeaderComponent {
  constructor(public dialog:MatDialog){}

  openDialog(){
    this.dialog.open(LogoutDialogComponent);
  }

}

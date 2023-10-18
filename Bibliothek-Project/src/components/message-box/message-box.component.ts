import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/users';
import { UserDataService } from 'src/services/UserDataService';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent {
  constructor (private router:Router, private userDataService: UserDataService){}


  logout(){
    this.userDataService.clearUserData();
    console.log(this.userDataService.getUserData());
    this.router.navigate(['/list'])
    
  }
}

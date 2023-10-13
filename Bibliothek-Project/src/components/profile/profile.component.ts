import { Component } from '@angular/core';
import { UserDataService } from 'src/services/UserDataService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profilename?: string


  constructor( private userDataService: UserDataService){
    const userData = this.userDataService.getUserData();
    this.profilename = userData;
    console.log(this.profilename)
  }





}


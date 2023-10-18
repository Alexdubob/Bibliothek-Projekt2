import { Component } from '@angular/core';
import { UserDataService } from 'src/services/UserDataService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profilename?: string
  totalAnimes?: string

  
  constructor( private userDataService: UserDataService){
    const userData = this.userDataService.getUserData();
    this.totalAnimes = userData.Animes_finished.length;
    this.profilename = userData.Username;
    console.log(this.profilename)
  }
  isTotalAnimesVisible: boolean = true;
  isFavouritesAnimesVisible: boolean = false;
  isAnimeListVisible: boolean = false;



  toggleTotalAnimesVisibility(){
    this.isAnimeListVisible = false;
    this.isFavouritesAnimesVisible = false;
    this.isTotalAnimesVisible = true;
  }
  toggleFavouriteAnimesVisibility(){
    this.isAnimeListVisible = false;
    this.isFavouritesAnimesVisible = true;
    this.isTotalAnimesVisible = false;
  }

  toggleAnimeListVisibility(){
    this.isAnimeListVisible = true;
    this.isFavouritesAnimesVisible = false;
    this.isTotalAnimesVisible = false;
  }

}


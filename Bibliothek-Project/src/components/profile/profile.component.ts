import { Component } from '@angular/core';
import { concatMap, of } from 'rxjs';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profilename?: string
  totalAnimes?: string
  watchingList: any[] = [];
  favouriteList: any[] = [];
  finishedList: any[] = [];
  planToWatchList: any[] = [];
  detailedWatchingList: any[] = [];
  detailedFavouriteList: any[] = [];
  detailedFinishedList: any[] = [];
  detailedPlanToWatchList: any[] = [];

  
  constructor( 
    private userDataService: UserDataService,
    private animeService: AnimeService
    
    ){
    const userData = this.userDataService.getUserData();
    this.totalAnimes = userData.Animes_finished.length;
    this.profilename = userData.Username;
    
    console.log(this.profilename)
  }
  
  
  isTotalAnimesVisible: boolean = false;
  isFavouritesAnimesVisible: boolean = false;
  isAnimeListVisible: boolean = true;

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
  
  
  ngOnInit(): void {
    const userData = this.userDataService.getUserData();
    this.watchingList = userData.Animes_watching;
    this.favouriteList = userData.Favourite_animes;
    this.finishedList = userData.Animes_finished;
    this.planToWatchList = userData.Animes_plan_to_watch;

    this.loadDetailedAnimeData(this.watchingList, this.detailedWatchingList);
    this.loadDetailedAnimeData(this.favouriteList, this.detailedFavouriteList);
    this.loadDetailedAnimeData(this.finishedList, this.detailedFinishedList);
    this.loadDetailedAnimeData(this.planToWatchList, this.detailedPlanToWatchList);
  }

  private loadDetailedAnimeData(idList: string[], targetList: any[]): void {
    of(...idList)
      .pipe(concatMap(animeId => this.animeService.getAnimeById(animeId)))
      .subscribe(
        animeData => {
          targetList.push(animeData);
        },
        error => {
          console.error('Fehler beim Abrufen von Anime-Daten:', error);
        }
      );
  }
}




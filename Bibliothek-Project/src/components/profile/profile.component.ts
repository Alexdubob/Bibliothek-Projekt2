import { Component } from '@angular/core';
import { concatMap, forkJoin, of } from 'rxjs';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { UserService } from 'src/services/UserService';
import { Anime } from 'src/models/animes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  
  profilename?: string;
  totalAnimes?: string;
  watchingList: string[] = [];
  favouriteList: string[] = [];
  finishedList: string[] = [];
  planToWatchList: string[] = [];
  detailedWatchingList: Anime[] = [];
  detailedFavouriteList: Anime[] = [];
  detailedFinishedList: Anime[] = [];
  detailedPlanToWatchList: Anime[] = [];

  constructor(
    private userDataService: UserDataService,
    private animeService: AnimeService,
    private userService: UserService,
  ) {
    const userData = this.userDataService.getUserData();
    this.totalAnimes = userData.Animes_finished.length;
    this.profilename = userData.Username;
  }

  isTotalAnimesVisible: boolean = false;
  isFavouritesAnimesVisible: boolean = false;
  isAnimeListVisible: boolean = true;


  toggleTotalAnimesVisibility() {
    this.isAnimeListVisible = false;
    this.isFavouritesAnimesVisible = false;
    this.isTotalAnimesVisible = true;
  }
  toggleFavouriteAnimesVisibility() {
    this.isAnimeListVisible = false;
    this.isFavouritesAnimesVisible = true;
    this.isTotalAnimesVisible = false;
  }

  toggleAnimeListVisibility() {
    this.isAnimeListVisible = true;
    this.isFavouritesAnimesVisible = false;
    this.isTotalAnimesVisible = false;
  }

  ngOnInit(): void {
    const userData = this.userDataService.getUserData();
    console.log(userData)
    this.watchingList = userData.Animes_watching;
    this.favouriteList = userData.Favourite_animes;
    this.finishedList = userData.Animes_finished;
    this.planToWatchList = userData.Animes_plan_to_watch;

    this.loadAnimeDetails();
  }
  
  
  private loadAnimeDetails(): void {
    this.loadDetailedAnimeData(this.watchingList, this.detailedWatchingList);
    this.loadDetailedAnimeData(this.favouriteList, this.detailedFavouriteList);
    this.loadDetailedAnimeData(this.finishedList, this.detailedFinishedList);
    this.loadDetailedAnimeData(this.planToWatchList,this.detailedPlanToWatchList);
  }
  
  private loadDetailedAnimeData(idList: string[], targetList: Anime[]): void {
    const requests = idList.map((animeId) => this.animeService.getAnimeById(animeId));
  
    forkJoin(requests).subscribe(
      (animeResponses: Anime[]) => {
        animeResponses.forEach((animeData: any) => {
          console.log(animeData)
          const anime = new Anime(
            animeData.data.mal_id.toString(),
            animeData.data.title,
            animeData.data.images.jpg.image_url
          );
          console.log(anime)
          targetList.push(anime);
        });
      },
      (error) => {
        console.error('Fehler beim Abrufen von Anime-Daten:', error);
      }
    );
  }
}  
import { Component, Input } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-favourite-animes',
  templateUrl: './favourite-animes.component.html',
  styleUrls: ['./favourite-animes.component.scss']
})
export class FavouriteAnimesComponent {

  constructor(
    private userDataService: UserDataService,
    private animeService: AnimeService
  ) {}
  @Input() anime?: any;


  favouriteAnimeList: any[] = [];
  detailedFavouriteAnimeDataList: any[] = [];

  async ngOnInit(): Promise<void> {
    const userData = this.userDataService.getUserData();
    console.log(userData)
    this.favouriteAnimeList = userData.Favourite_animes;
    console.log(this.favouriteAnimeList);

    of(...this.favouriteAnimeList).pipe(
      concatMap(animeId => this.animeService.getAnimeById(animeId)),
    ).subscribe(
      animeData => {
        this.detailedFavouriteAnimeDataList.push(animeData);
        console.log(this.detailedFavouriteAnimeDataList);
      },
      error => {
        console.error('Fehler beim Abrufen von Anime-Daten:', error);
      }
    );
  }
}
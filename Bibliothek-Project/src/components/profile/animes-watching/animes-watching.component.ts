import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-animes-watching',
  templateUrl: './animes-watching.component.html',
  styleUrls: ['./animes-watching.component.scss'],
})
export class AnimesWatchingComponent {
  constructor(
    private userDataService: UserDataService,
    private animeService: AnimeService
  ) {}
  @Input() anime?: any;


  animesWatchingList: any[] = [];
  detailedAnimeDataList: any[] = [];

  async ngOnInit(): Promise<void> {
    const userData = this.userDataService.getUserData();
    console.log(userData)
    this.animesWatchingList = userData.Animes_watching;
    console.log(this.animesWatchingList);

    of(...this.animesWatchingList).pipe(
      concatMap(animeId => this.animeService.getAnimeById(animeId)),
    ).subscribe(
      animeData => {
        this.detailedAnimeDataList.push(animeData);
        console.log(this.detailedAnimeDataList);
      },
      error => {
        console.error('Fehler beim Abrufen von Anime-Daten:', error);
      }
    );
  }
}
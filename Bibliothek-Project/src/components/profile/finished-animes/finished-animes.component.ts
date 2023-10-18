import { Component, Input } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-finished-animes',
  templateUrl: './finished-animes.component.html',
  styleUrls: ['./finished-animes.component.scss']
})
export class FinishedAnimesComponent {
constructor(
  private userDataService: UserDataService,
  private animeService: AnimeService
){}
@Input() anime?: any;


finishedAnimeList: any[] = [];
detailedFinishedAnimeList: any[] = [];

async ngOnInit(): Promise<void> {
  const userData = this.userDataService.getUserData();
  this.finishedAnimeList = userData.Animes_finished;
  console.log(this.finishedAnimeList);

  of(...this.finishedAnimeList).pipe(
    concatMap(animeId => this.animeService.getAnimeById(animeId)),
  ).subscribe(
    animeData => {
      this.detailedFinishedAnimeList.push(animeData);
      console.log(this.detailedFinishedAnimeList);
    },
    error => {
      console.error('Fehler beim Abrufen von Anime-Daten:', error);
    }
  );
}
}
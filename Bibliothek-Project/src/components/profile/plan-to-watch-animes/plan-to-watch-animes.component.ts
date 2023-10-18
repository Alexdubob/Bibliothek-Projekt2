import { Component, Input } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-plan-to-watch-animes',
  templateUrl: './plan-to-watch-animes.component.html',
  styleUrls: ['./plan-to-watch-animes.component.scss']
})
export class PlanToWatchAnimesComponent {
  constructor(
    private userDataService: UserDataService,
    private animeService: AnimeService
  ) {}
  @Input() anime?: any;


  planToWatchAnimeList: any[] = [];
  detailedPlanToWatchAnimeDataList: any[] = [];

  async ngOnInit(): Promise<void> {
    const userData = this.userDataService.getUserData();
    console.log(userData)
    this.planToWatchAnimeList = userData.Animes_plan_to_watch;
    console.log(this.planToWatchAnimeList);

    of(...this.planToWatchAnimeList).pipe(
      concatMap(animeId => this.animeService.getAnimeById(animeId)),
    ).subscribe(
      animeData => {
        this.detailedPlanToWatchAnimeDataList.push(animeData);
        console.log(this.detailedPlanToWatchAnimeDataList);
      },
      error => {
        console.error('Fehler beim Abrufen von Anime-Daten:', error);
      }
    );
  }
}

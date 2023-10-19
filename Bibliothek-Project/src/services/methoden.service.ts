import { Injectable } from '@angular/core';
import { concatMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MethodenService {
  userDataService: any;
  animeList: any;
  animeService: any;
  detailedAnimeList: any;

  constructor() { }

addAnime(animeList:any,detailedAnimeList:any,userDataAnime:any){
    const userData = this.userDataService.getUserData();
    console.log(userData)
    this.animeList = userData.userDataAnime;
    console.log(this.animeList);
    
    of(...this.animeList).pipe(
      concatMap(animeId => this.animeService.getAnimeById(animeId)),
      ).subscribe(
      animeData => {
        this.detailedAnimeList.push(animeData);
        console.log(this.detailedAnimeList);
      },
      error => {
        console.error('Fehler beim Abrufen von Anime-Daten:', error);
      }
      );
    }
  
  }

  
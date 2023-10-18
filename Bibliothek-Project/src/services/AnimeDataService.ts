import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeDataService {
  selectedAnime: any;

  setSelectedAnime(anime: any) {
    this.selectedAnime = anime;
  }

  getSelectedAnime() {
    return this.selectedAnime;
  }
}
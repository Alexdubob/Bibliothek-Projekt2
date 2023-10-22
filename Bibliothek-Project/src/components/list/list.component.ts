import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { AnimeDataService } from 'src/services/AnimeDataService';
import { Anime } from 'src/models/animes';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  currentAnimeSeasonList: Anime[] = [];
  upcomingAnimeSeasonList: Anime[] = [];
  topAnimeList: Anime[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getTopAnimes().subscribe(
      (response: any) => {
        const animeList = response.data;
        if (Array.isArray(animeList)) {
          this.topAnimeList = animeList.map(anime => new Anime(
            anime.mal_id.toString(),
            anime.title,
            anime.images.jpg.image_url
          ));
        } else {
          console.error('Unerwartetes Datenformat:', animeList);
        }
      },
      (error) => {
        console.error('Fehler beim Abrufen der Top AnimeList', error);
      }
    );


    this.animeService.getSeasonNow().subscribe(
      (response: any) => {
        const animeList = response.data;
        if (Array.isArray(animeList)) {
          this.currentAnimeSeasonList = animeList.map(anime => new Anime(
            anime.mal_id.toString(),
            anime.title,
            anime.images.jpg.image_url
          ));
        } else {
          console.error('Unerwartetes Datenformat:', animeList);
        }
      },
      (error) => {
        console.error('Fehler beim Abrufen der Top AnimeList', error);
      }
    );


    this.animeService.getSeasonUpcoming().subscribe(
      (response: any) => {
        const animeList = response.data;
        if (Array.isArray(animeList)) {
          this.upcomingAnimeSeasonList = animeList.map(anime => new Anime(
            anime.mal_id.toString(),
            anime.title,
            anime.images.jpg.image_url
          ));
        } else {
          console.error('Unerwartetes Datenformat:', animeList);
        }
      },
      (error) => {
        console.error('Fehler beim Abrufen der Top AnimeList', error);
      }
    );
  
 }
  title = 'Bibliothek-Project';
}

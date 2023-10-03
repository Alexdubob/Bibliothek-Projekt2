import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/AnimeService';

interface Anime{
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  currentAnimeSeasonList: Anime[] = [];
  upcomingAnimeSeasonList: Anime[]= [];
  topAnimeList: Anime[]= [];

  constructor(private animeService: AnimeService){}

  ngOnInit(): void {
      this.animeService.getSeasonNow().subscribe(
        (data:any) => {
          this.currentAnimeSeasonList = data;
          console.log(this.currentAnimeSeasonList)
        },
        (error) =>{
          console.error('Fehler beim Abrufen der Current Anime SeasonList', error)
        }
      )
      
      this.animeService.getSeasonUpcoming().subscribe(
        (data:any) => {
          this.upcomingAnimeSeasonList = data;
          console.log(this.upcomingAnimeSeasonList)
        },
        (error) =>{
          console.error('Fehler beim Abrufen der Upcoming Anime SeasonList', error)
        }
      )

      this.animeService.getTopAnimes().subscribe(
        (data:any) => {
          this.topAnimeList = data;
          console.log(this.topAnimeList)
        },
        (error) =>{
          console.error('Fehler beim Abrufen der Top AnimeList', error)
        }
      )
  }
    title = 'Bibliothek-Project';
  }
  





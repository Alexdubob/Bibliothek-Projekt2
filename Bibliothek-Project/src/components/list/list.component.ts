import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { AnimeDataService } from 'src/services/AnimeDataService';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  currentAnimeSeasonList: any[] = [];
  upcomingAnimeSeasonList: any[]= [];
  topAnimeList: any[]= [];

  constructor(private animeService: AnimeService, private animeDataServie: AnimeDataService){}


  ngOnInit(): void {
      this.animeService.getSeasonNow().subscribe(
        (currentAnimeSeasonList:any) => {
          this.currentAnimeSeasonList = currentAnimeSeasonList.data;
          console.log(this.currentAnimeSeasonList)
        },
        (error) =>{
          console.error('Fehler beim Abrufen der Current Anime SeasonList', error)
        }
      )
      
       this.animeService.getSeasonUpcoming().subscribe(
         (upcomingAnimeSeasonList:any) => {
           this.upcomingAnimeSeasonList = upcomingAnimeSeasonList.data;
           console.log(this.upcomingAnimeSeasonList)
         },
         (error) =>{
           console.error('Fehler beim Abrufen der Upcoming Anime SeasonList', error)
         }
       )

       this.animeService.getTopAnimes().subscribe(
         (topAnimeList:any) => {
           this.topAnimeList = topAnimeList.data;
           console.log(this.topAnimeList)
         },
         (error) =>{
           console.error('Fehler beim Abrufen der Top AnimeList', error)
         }
       )
  }
    title = 'Bibliothek-Project';


    
  }
  





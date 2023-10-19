import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { UserService } from 'src/services/UserService';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent{
  searchTerm: string = "";
  searchResults: any[] = [];

  constructor(
    private animeService: AnimeService,  
    ){}

    search() {
      this.animeService.searchAnime(this.searchTerm).subscribe(
          (searchResults: any) => {
              this.searchResults = searchResults.data;
              console.log(this.searchResults)
          },
          (error) => {
              console.error('Fehler beim Abrufen der Suchergebnisse', error);
          }
      );
  }
}



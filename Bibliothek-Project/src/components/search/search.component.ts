import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { UserService } from 'src/services/UserService';
import { FormsModule } from '@angular/forms';
import { Anime } from 'src/models/animes';



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
          (response: any) => {
            const resultList = response.data;
            if (Array.isArray(resultList)) {
              this.searchResults = resultList.map(anime => new Anime(
                anime.mal_id.toString(),
                anime.title,
                anime.images.jpg.image_url
              ));
            } else {
              console.error('Unerwartetes Datenformat:', resultList);
            }
          },
          (error) => {
            console.error('Fehler beim Abrufen der Top AnimeList', error);
          }
        );
}

}

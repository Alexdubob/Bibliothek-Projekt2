import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/services/AnimeService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent{
  searchTerm: string ="";
  searchResults: any[] = [];

  constructor(private http: HttpClient){}

  search() {
    if (this.searchTerm.trim() === "") {
      this.searchResults = [];
      return;
    }

    this.http.get<any[]>(`https://api.jikan.moe/v4/anime`).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error("Fehler bei der Suche:", error);
      }
    );
  }
}

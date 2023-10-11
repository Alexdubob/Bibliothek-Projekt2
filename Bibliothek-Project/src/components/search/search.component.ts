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

  search(){
    const apiUrl = `https://api.jikan.moe/v4/anime`;
    this.http.get<any[]>(apiUrl, {
      params: {
        q: this.searchTerm
      }
    }).subscribe(response => {
      this.searchResults = response;
    });
  }
}

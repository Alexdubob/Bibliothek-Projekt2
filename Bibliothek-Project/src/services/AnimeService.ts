import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private SeasonNowUrl = 'https://api.jikan.moe/v4/seasons/now';
  private SeasonUpcomingUrl = 'https://api.jikan.moe/v4/seasons/upcoming';
  private TopAnimeUrl = 'https://api.jikan.moe/v4/top/anime';

  constructor(private http: HttpClient) {}

  getSeasonNow(): Observable<any> {
    return this.http.get(this.SeasonNowUrl);
  }

  getSeasonUpcoming(): Observable<any> {
    return this.http.get(this.SeasonUpcomingUrl);
  }

  getTopAnimes(): Observable<any> {
    return this.http.get(this.TopAnimeUrl);
  }

  searchAnime(term: string): Observable<any> {
    const searchUrl = `https://api.jikan.moe/v4/anime?q=${term}`;
    return this.http.get(searchUrl);
  }

  getAnimeById(id: string): Observable<any> {
    const url = `https://api.jikan.moe/v4/anime/${id}`;
    return this.http.get(url);
  }

}

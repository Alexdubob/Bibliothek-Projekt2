import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AnimeService{
    private SeasonNowUrl = "https://api.jikan.moe/v4/seasons/now";
    private SeasonUpcomingUrl = "https://api.jikan.moe/v4/seasons/upcoming";
    private TopAnimeUrl = "https://api.jikan.moe/v4/top/anime";
    private AnimeUrl = "https://api.jikan.moe/v4/anime?q=";

    constructor (private http: HttpClient){}

    getSeasonNow(): Observable<any> {
        return this.http.get(this.SeasonNowUrl);
    }

    getSeasonUpcoming(): Observable<any>{
        return this.http.get(this.SeasonUpcomingUrl);
    }

    getTopAnimes(): Observable<any>{
        return this.http.get(this.TopAnimeUrl);
    }

    getAnime(): Observable<any>{
        return this.http.get(this.AnimeUrl);
    }

    getAnimeById(id: string): Observable<any>{
        const url = `https://api.jikan.moe/v4/anime/${id}/full`;
        return this.http.get(url);
    }

}
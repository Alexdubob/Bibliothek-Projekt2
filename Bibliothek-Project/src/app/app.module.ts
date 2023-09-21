import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CurrentlyTrendingComponent } from './currently-trending/currently-trending.component';
import { CurrentSeasonComponent } from './current-season/current-season.component';
import { TopRankedComponent } from './top-ranked/top-ranked.component';
import { AllTimePopularComponent } from './all-time-popular/all-time-popular.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CurrentlyTrendingComponent,
    CurrentSeasonComponent,
    TopRankedComponent,
    AllTimePopularComponent,
    SearchbarComponent,
    LoginComponent,
    ProfileComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

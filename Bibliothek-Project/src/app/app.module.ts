import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { CardComponent } from 'src/components/card/card.component';
import { CurrentlyTrendingComponent } from 'src/components/currently-trending/currently-trending.component';
import { CurrentSeasonComponent } from 'src/components/current-season/current-season.component';
import { TopRankedComponent } from 'src/components/top-ranked/top-ranked.component';
import { AllTimePopularComponent } from 'src/components/all-time-popular/all-time-popular.component';
import { SearchbarComponent } from 'src/components/searchbar/searchbar.component';
import { LoginComponent } from 'src/components/login/login.component';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { ListComponent } from 'src/components/list/list.component';
import { SearchComponent } from 'src/components/search/search.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';




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
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { CardComponent } from 'src/components/card/card.component';
import { LoginComponent } from 'src/components/login/login.component';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { ListComponent } from 'src/components/list/list.component';
import { SearchComponent } from 'src/components/search/search.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { MessageBoxComponent } from 'src/components/message-box/message-box.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeService } from '../services/AnimeService';
import { TruncatePipe } from 'src/pipes/truncate-pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { StoreModule } from '@ngrx/store';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LoginComponent,
    ProfileComponent,
    ListComponent,
    SearchComponent,
    MessageBoxComponent,
    TruncatePipe,
    SignInComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    StoreModule.forRoot({}, {})
    
    
  ],
  providers: [
    AnimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

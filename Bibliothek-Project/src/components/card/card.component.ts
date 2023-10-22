import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AnimeDataService } from 'src/services/AnimeDataService';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { UserService } from 'src/services/UserService';
import { Anime} from 'src/models/animes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(
    private userDataService: UserDataService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private animeService: AnimeService

  ) {}
  @Input() title?: any;
  @Input() img?: any;
  @Input() anime?: Anime;


  userData = this.userDataService.getUserData();

  notLogedIn() {
    this.router.navigate(['/login']);
    this.openSnackBar(
      'Du musst eingeloggt sein um deine Animes zu verwalten',
      'Schließen'
    );
  }

  addToAnimeList(animeListName: string) {
    if (!this.userData) {
      this.notLogedIn();
      return;
    }

    let animeId = '' + this.anime?.id;

    const updateField = (user: any) => {
      const list = user[animeListName];
      const index = list.findIndex((listItem: string) => listItem === animeId);

      if (index !== -1) {
        console.log(list)
        list.splice(index, 1);
        this.openSnackBar('Anime wurde erfolgreich entfernt', 'Schließen');
        //window.location.reload()
      } else {
        list.push(animeId);
        this.openSnackBar(
          `Anime wurde erfolgreich zu "${animeListName}" hinzugefügt`,
          'Schließen'
        );
      }
    };

    this.userService.getUserById(this.userData.Id).subscribe((user) => {
      updateField(user);

      this.userService
        .updateUser(this.userData.Id, user)
        .subscribe((updateUser) => {
          console.log(`${animeListName} wurden aktualisiert`, updateUser);
          this.userDataService.setUserData(updateUser);
        });
    });
  }

  addToFavourites() {
    this.addToAnimeList('Favourite_animes');
  }

  addToFinishedAnimes() {
    this.addToAnimeList('Animes_finished');
  }

  addToPlannedAnimes() {
    this.addToAnimeList('Animes_plan_to_watch');
  }

  addToWatchingAnimes() {
    this.addToAnimeList('Animes_watching');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}

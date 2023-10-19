import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AnimeDataService } from 'src/services/AnimeDataService';
import { AnimeService } from 'src/services/AnimeService';
import { UserDataService } from 'src/services/UserDataService';
import { UserService } from 'src/services/UserService';

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
    private router: Router
  ) {}
  @Input() title?: any;
  @Input() img?: any;
  @Input() anime?: any;

  userData = this.userDataService.getUserData();

  notLogedIn() {
    this.router.navigate(['/login']);
    this.openSnackBar(
      'Du musst eingeloggt sein um deine Animes zu verwalten',
      'Schließen'
    );
  }


  addToFavourites() {
    if (!this.userData) {
      this.notLogedIn();
      return;
    }
    const user = this.userService
      .getUserById(this.userData.Id)
      .subscribe((user) => {
        const index = user.Favourite_animes.findIndex(
          (favAnime: string) => favAnime == this.anime.mal_id
        );
        if (index !== -1) {
          user.Favourite_animes.splice(index, 1);
          this.openSnackBar('Anime wurde erfolgreich entfernt', 'Schließen');
        } else {
          user.Favourite_animes.push('' + this.anime.mal_id);
          console.log(this.anime.mal_id)

          this.openSnackBar(
            'Anime wurde erfolgreich zu "favourites" hinzugefügt',
            'Schließen'
          );
        }

        this.userService
          .updateUser(this.userData.Id, user)
          .subscribe((updateUser) => {
            console.log('Favouriten wurden aktualisiert', updateUser);
            this.userDataService.setUserData(updateUser);
          });
      });
  }


  addToFinishedAnimes() {
    if (!this.userData) {
      this.notLogedIn();
      return;
    }
    const user = this.userService
      .getUserById(this.userData.Id)
      .subscribe((user) => {
        const index = user.Animes_finished.findIndex(
          (finishedAnime: string) => finishedAnime == this.anime.mal_id
        );
        if (index !== -1) {
          user.Animes_finished.splice(index, 1);
          this.openSnackBar('Anime wurde erfolgreich entfernt', 'Schließen');
        } else {
          user.Animes_finished.push('' + this.anime.mal_id);
          console.log(this.anime.mal_id)
          this.openSnackBar(
            'Anime wurde erfolgreich zu "finished Animes" hinzugefügt',
            'Schließen'
          );
        }

        this.userService
          .updateUser(this.userData.Id, user)
          .subscribe((updateUser) => {
            console.log('Finished animes wurden aktualisiert', updateUser);
            this.userDataService.setUserData(updateUser);
          });
      });
  }


  addToPlannedAnimes() {
    if (!this.userData) {
      this.notLogedIn();
      return;
    }
    const user = this.userService
      .getUserById(this.userData.Id)
      .subscribe((user) => {
        const index = user.Animes_plan_to_watch.findIndex(
          (planedAnimes: string) => planedAnimes == this.anime.mal_id
        );
        if (index !== -1) {
          user.Animes_plan_to_watch.splice(index, 1);
          this.openSnackBar('Anime wurde erfolgreich entfernt', 'Schließen');
        } else {
          user.Animes_plan_to_watch.push('' + this.anime.mal_id);
          console.log(this.anime.mal_id)
          this.openSnackBar(
            'Anime wurde erfolgreich zu "plan to watch" hinzugefügt',
            'Schließen'
          );
        }

        this.userService
          .updateUser(this.userData.Id, user)
          .subscribe((updateUser) => {
            console.log('planed animes wurden aktualisiert', updateUser);
            this.userDataService.setUserData(updateUser);
          });
      });
  }


  addToWatchingAnimes() {
    if (!this.userData) {
      this.notLogedIn();
      return;
    }
    const user = this.userService
      .getUserById(this.userData.Id)
      .subscribe((user) => {
        const index = user.Animes_watching.findIndex(
          (watchingAnimes: string) => watchingAnimes == this.anime.mal_id
        );
        if (index !== -1) {
          user.Animes_watching.splice(index, 1);
          this.openSnackBar('Anime wurde erfolgreich entfernt', 'Schließen');
        } else {
          user.Animes_watching.push('' + this.anime.mal_id);
          console.log(this.anime.mal_id)

          this.openSnackBar(
            'Anime wurde erfolgreich zu "watching" hinzugefügt',
            'Schließen'
          );
        }

        this.userService
          .updateUser(this.userData.Id, user)
          .subscribe((updateUser) => {
            console.log('watching animes wurden aktualisiert', updateUser);
            this.userDataService.setUserData(updateUser);
          });
      });
  }

  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}

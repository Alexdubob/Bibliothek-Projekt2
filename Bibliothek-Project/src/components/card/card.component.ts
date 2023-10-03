import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/AnimeService';
import { ListComponent } from '../list/list.component';

interface Anime {
  title: string;
  image_url: string;
  synopsis: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() text: string = '';
  @Input() img: string = '';
  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}

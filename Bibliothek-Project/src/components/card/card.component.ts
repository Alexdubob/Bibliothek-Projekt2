import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/AnimeService';
import { ListComponent } from '../list/list.component';
import { TruncatePipe } from 'src/pipes/truncate-pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: any;
  @Input() img?: any;

  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }


  
}

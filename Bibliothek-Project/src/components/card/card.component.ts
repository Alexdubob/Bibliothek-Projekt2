import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() text: string = "";
@Input() img: string = "";
isFavorite = false;
hovered = false;

toggleFavorite(){
  this.isFavorite = !this.isFavorite;
}

showFavoriteIcon(){
  this.hovered = true;
}

hideFavoriteIcon(){
  this.hovered = false;
}



}

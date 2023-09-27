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

toggleFavorite(){
  this.isFavorite = !this.isFavorite;
}





}

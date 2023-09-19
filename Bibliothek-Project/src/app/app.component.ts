import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

cardTexts =[
  "Dies ist ein Test Text1",
  "Dies ist ein Test Text2",
  "Dies ist ein Test Text3",
  "Dies ist ein Test Text4"
];

cardImages = [
  "../../assets/img/img1.jpg",
  "../../assets/img/img2.jpg",
  "../../assets/img/img3.jpg",
  "../../assets/img/img4.jpg",
  
]

  title = 'Bibliothek-Project';
}


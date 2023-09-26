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
  "Dies ist ein Test Text4",
  "Dies ist ein Test Text5",
  "Dies ist ein Test Text6",
  "Dies ist ein Test Text7",
];

cardImages = [
  "../../assets/img/img1.jpg",
  "../../assets/img/img2.jpg",
  "../../assets/img/img3.jpg",
  "../../assets/img/img4.jpg",
  "../../assets/img/img5.jpg",
  "../../assets/img/img6.jpg",
  "../../assets/img/img7.jpg",
  
]
testUser=[{
  username: "alex",
  password: "123"
}]


  title = 'Bibliothek-Project';
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent {
  constructor (private router:Router){}


  logout(){
    this.router.navigate(['/list'])
  }
}

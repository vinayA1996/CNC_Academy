import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images = [
    'assets/cncposter.jpeg',
    'assets/cncposter2.png',
    ' assets/cncposter3.png',
  ];
}

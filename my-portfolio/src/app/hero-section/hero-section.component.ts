import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements OnInit {
  heroImage: string = '';

  ngOnInit(): void {
    const randomNum: Number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (randomNum) {
      case 1:
        this.heroImage = 'assets/images/hero_image.jpg';
        break;
      case 2:
        this.heroImage = 'assets/images/hero_image_2.jpg';
        break;
      case 3:
        this.heroImage = 'assets/images/hero_image_3.jpg';
        break;
      default:
        this.heroImage = 'assets/images/hero_image.jpg';
        break;
    }
  }
}

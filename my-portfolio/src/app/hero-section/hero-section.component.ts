import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  imageToDisplay(): string {
    const randomNum: Number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (randomNum) {
      case 1:
        return 'assets/images/hero_image.jpg';
      case 2:
        return 'assets/images/hero_image_2.jpg';
      case 3:
        return 'assets/images/hero_image_3.jpg';
      default:
        return 'assets/images/hero_image.jpg';
    }
  }
}

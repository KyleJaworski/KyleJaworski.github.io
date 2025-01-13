import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLDivElement>;

  openCloseNav() {
    console.log('hello');
    if (this.mobileMenu.nativeElement.style.display === 'block') {
      this.mobileMenu.nativeElement.style.display = 'none';
    } else {
      this.mobileMenu.nativeElement.style.display = 'block';
    }
  }
}

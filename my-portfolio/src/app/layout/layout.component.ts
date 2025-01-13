import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-layout',
  imports: [NavBarComponent, HeroSectionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}

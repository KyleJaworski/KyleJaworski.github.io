import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { TechSkillsComponent } from '../tech-skills/tech-skills.component';
import { NoteableProjectsComponent } from '../noteable-projects/noteable-projects.component';

@Component({
  selector: 'app-layout',
  imports: [
    NavBarComponent,
    HeroSectionComponent,
    TimelineComponent,
    TechSkillsComponent,
    NoteableProjectsComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}

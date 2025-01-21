import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-skills',
  imports: [CommonModule],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.css',
})
export class TechSkillsComponent {
  usedTechnologies = [
    {
      icon: 'devicon-python-plain',
      label: 'Python',
    },
    {
      icon: 'devicon-typescript-plain',
      label: 'Type Script',
    },
    {
      icon: 'devicon-javascript-plain',
      label: 'Javascript',
    },
    {
      icon: 'devicon-angularjs-plain',
      label: 'Angular',
    },
    {
      icon: 'devicon-react-original',
      label: 'React',
    },
    {
      icon: 'devicon-sqldeveloper-plain',
      label: 'SQL Developer',
    },
    {
      icon: 'devicon-microsoftsqlserver-plain',
      label: 'Microsoft SQL Server',
    },
    {
      icon: 'devicon-oracle-original',
      label: 'PL/SQL',
    },
    {
      icon: 'devicon-postgresql-plain',
      label: 'PostgreSQL',
    },
    {
      icon: 'devicon-docker-plain',
      label: 'Docker',
    },
    {
      icon: 'devicon-oracle-original',
      label: 'BI Publisher',
    },
    {
      icon: 'devicon-github-original',
      label: 'Github',
    },
    {
      icon: 'devicon-tailwindcss-original',
      label: 'TailwindCSS',
    },
    {
      icon: 'devicon-csharp-plain',
      label: '',
    },
  ];
}

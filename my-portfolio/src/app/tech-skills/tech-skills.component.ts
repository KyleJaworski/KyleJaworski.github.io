import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-skills',
  imports: [CommonModule],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.css',
})
export class TechSkillsComponent {
  usedTechnologies: {
    currentIcon: string;
    icon: string;
    hoverIcon?: string;
    label?: string;
    site?: string;
  }[] = [
    {
      currentIcon: 'devicon-python-plain',
      icon: 'devicon-python-plain',
      hoverIcon: 'devicon-python-plain colored',
      label: 'Python',
      site: 'https://www.python.org/',
    },
    {
      currentIcon: 'devicon-typescript-plain',
      icon: 'devicon-typescript-plain',
      hoverIcon: 'devicon-typescript-plain colored',
      label: 'Type Script',
      site: 'https://www.typescriptlang.org/',
    },
    {
      currentIcon: 'devicon-javascript-plain',
      icon: 'devicon-javascript-plain',
      hoverIcon: 'devicon-javascript-plain colored',
      label: 'Javascript',
      site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      currentIcon: 'devicon-angularjs-plain',
      icon: 'devicon-angularjs-plain',
      hoverIcon: 'devicon-angularjs-plain colored',
      label: 'Angular',
      site: 'https://angular.dev/',
    },
    {
      currentIcon: 'devicon-react-original',
      icon: 'devicon-react-original',
      hoverIcon: 'devicon-react-original colored',
      label: 'React',
      site: 'https://react.dev/',
    },
    {
      currentIcon: 'devicon-sqldeveloper-plain',
      icon: 'devicon-sqldeveloper-plain',
      hoverIcon: 'devicon-sqldeveloper-plain colored',
      label: 'SQL Developer',
      site: 'https://www.oracle.com/database/sqldeveloper/',
    },
    {
      currentIcon: 'devicon-microsoftsqlserver-plain',
      icon: 'devicon-microsoftsqlserver-plain',
      hoverIcon: 'devicon-microsoftsqlserver-plain colored',
      label: 'Microsoft SQL Server',
      site: 'https://www.microsoft.com/en-us/sql-server',
    },
    {
      currentIcon: 'devicon-oracle-original',
      icon: 'devicon-oracle-original',
      hoverIcon: 'devicon-oracle-original colored',
      label: 'PL/SQL',
      site: 'https://www.oracle.com/database/technologies/appdev/plsql.html',
    },
    {
      currentIcon: 'devicon-postgresql-plain',
      icon: 'devicon-postgresql-plain',
      hoverIcon: 'devicon-postgresql-plain colored',
      label: 'PostgreSQL',
      site: 'https://www.postgresql.org/',
    },
    {
      currentIcon: 'devicon-docker-plain',
      icon: 'devicon-docker-plain',
      hoverIcon: 'devicon-docker-plain colored',
      label: 'Docker',
      site: 'https://www.docker.com/',
    },
    {
      currentIcon: 'devicon-oracle-original',
      icon: 'devicon-oracle-original',
      hoverIcon: 'devicon-oracle-original colored',
      label: 'BI Publisher',
      site: 'https://www.oracle.com/middleware/technologies/analytics-publisher.html',
    },
    {
      currentIcon: 'devicon-github-original',
      icon: 'devicon-github-original',
      label: 'Github',
      site: 'https://github.com/',
    },
    {
      currentIcon: 'devicon-tailwindcss-original',
      icon: 'devicon-tailwindcss-original',
      hoverIcon: 'devicon-tailwindcss-original colored',
      label: 'TailwindCSS',
      site: 'https://tailwindcss.com/',
    },
    {
      currentIcon: 'devicon-csharp-plain',
      icon: 'devicon-csharp-plain',
      hoverIcon: 'devicon-csharp-plain colored',
      label: '',
      site: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    },
  ];
}

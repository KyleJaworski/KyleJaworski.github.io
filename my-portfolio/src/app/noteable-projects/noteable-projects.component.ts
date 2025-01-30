import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

enum Affiliation {
  Employer = 'Employer',
  Personal = 'Personal Project',
}

@Component({
  selector: 'app-noteable-projects',
  imports: [CommonModule, ImageModule],
  templateUrl: './noteable-projects.component.html',
  styleUrl: './noteable-projects.component.css',
})
export class NoteableProjectsComponent {
  projects = [
    {
      affiliation: 'NAS',
      url: 'https://nas-llc.us/',
      projectTitle: 'Oracle WAM 1.9 to 2.3 Upgrade',
      skills: ['ETL', 'XPath', 'Javascript', 'PL/SQL', 'API', 'BI Publisher'],
      description:
        'At NAS, Arnold Airforce Base, I served as a Developer Analyst supporting Oracle Utilities (formerly Oracle Work Asset Management), which managed inventory, assets, maintenance schedules, crews, purchasing, and receiving. Shortly after starting, I led the ETL process for critical modules, primarily Assets and Maintenance Schedules, as part of a major upgrade effort. I collaborated with stakeholders to clarify the updated software’s handling of these modules, mapped and cleansed migration records, and wrote PL/SQL procedures to stage and load data via API calls. Post-migration, I rewrote legacy business logic using the new developer framework, working closely with testers and the admin team to test and deploy production-critical functionality.',
      time: '2021-2023',
      img: '',
    },
    {
      affiliation: 'ASRC Federal',
      url: 'https://www.asrcfederal.com/',
      projectTitle: 'Permit Scheduling Application',
      skills: ['GitLab', 'Agile', 'C#', 'Type Script'],
      description:
        'As part of a small team at ASRC Federal, I helped develop a custom permit scheduling application using C#, TypeScript, and Telerik/Kendo libraries, with GitLab for version control and pipelines. We followed Agile practices with 2-3 week sprints, daily standups, and client participation. At the end of each sprint, I presented my contributions, showcasing added functionality. Although I didn’t see the project to completion, it provided valuable experience in full-stack development and Agile workflows.',
      time: '2023',
      img: '',
    },
    {
      affiliation: 'Personal Project',
      url: 'https://canopy.kylejaworski.dev/',
      projectTitle: 'Canopy - CRM',
      skills: ['Typescript', 'MongoDB', 'Angular', 'TailwindCSS', 'Github'],
      description:
        'This personal project is in development and leverages MongoDB, Angular, and Tailwind CSS, to create a CRM tool inspired by a friend’s business needs, helping manage customers, schedules, and sales. Through this project, I am also becoming more familiar with GitHub workflows and GitHub Actions while enhancing my technical skills.',
      time: '2025 - Current',
      img: 'assets/images/CRM_dashboard.png',
    },
  ];
}

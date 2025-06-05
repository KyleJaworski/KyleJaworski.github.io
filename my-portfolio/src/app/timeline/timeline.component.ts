import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  company: string;
  role: string;
  date: Date;
  description: string;
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  jobHistory: Job[] = [
    {
      company: 'BreakPoint Labs',
      role: 'Software Developer',
      date: new Date(Date.UTC(2025, 3, 1)),
      description:
        'Worked on the DREN Subscribers portal with a small team of engineers',
    },
    {
      company: 'Woolpert',
      role: 'Application Analyst/Developer',
      date: new Date(Date.UTC(2023, 11, 1)),
      description:
        'Collaborated with clients to analyze and resolve data-related challenges focusing on system integration, automating and reporting.',
    },
    {
      company: 'ASRC Federal',
      role: 'Associate Full Stack Software Engineer',
      date: new Date(Date.UTC(2023, 8, 1)),
      description:
        'Worked within an Agile team to develop and maintain a web-based application that provides a platform for users to access and manage data.',
    },
    {
      company: 'National Aerospace Solutions',
      role: 'IS&T Developer Analyst',
      date: new Date(Date.UTC(2021, 2, 1)),
      description:
        'Supported Oracle Utilities application by implementing/maintaining business logic, data integration, data quality and report generation.',
    },
    {
      company: 'Cass County Government IT',
      role: 'Help Desk Technician',
      date: new Date(Date.UTC(2020, 5, 1)),
      description:
        'Provided technical support to users through the help desk ticketing system, troubleshooting and resolving issues efficiently.',
    },
  ];
}

import { Component } from '@angular/core';
import { YearsSinceDatePipe } from '../../pipes/years-since-date-pipe';

@Component({
  selector: 'app-skills',
  imports: [YearsSinceDatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  protected readonly skillsSection = {
    firstWorkingDate: new Date(2017, 9, 1),
    imageUrl: '/images/undraw_programming_re_kg9v.svg',

    skills: [
      'Develop single page applications with Angular and React',
      'Develop web applications with ASP.NET Core and Angular',
      'Develop static generated websites with Astro',
      'Astro deployment with Azure Static Web App',
      'Relational database design',
      'Refactor of legacy web apps to modern .NET API solutions with Angular front-end',
      'Unit testing with xUnit and Jasmine',
      'Azure DevOps and Github Actions builds and deployments to cloud and on-premise systems',
    ],
  } as const;
}

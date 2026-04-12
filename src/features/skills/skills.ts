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
  } as const;
}

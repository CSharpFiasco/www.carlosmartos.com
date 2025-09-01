import { Component } from '@angular/core';
import { AchievementCard } from '../achievement-card/achievement-card';

@Component({
  selector: 'app-achievement',
  imports: [AchievementCard],
  templateUrl: './achievement.html',
  styleUrl: './achievement.scss'
})
export class Achievement {
  protected readonly achievementSection = {
    title: 'Achievements And Publications',

    achievementsCards: [
      {
        title: 'Reuse of variants in online repositories: Foraging for the fittest',
        subtitle: 'Publication: 2016 IEEE Symposium on Visual Languages and Human-Centric Computing',
        image: '/images/undraw_books_re_8gea.svg',
        alt: 'Woman showing book',
        footerLink: [
          {
            name: 'IEEE Publication',
            url: 'https://ieeexplore.ieee.org/document/7739674',
          },
        ],
      },
    ],
  } as const;
}

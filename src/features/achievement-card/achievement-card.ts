import { Component, input } from '@angular/core';

type FooterLink = {
  readonly name: string;
  readonly url: string;
};

@Component({
  selector: 'app-achievement-card',
  imports: [],
  templateUrl: './achievement-card.html',
  styleUrl: './achievement-card.scss'
})
export class AchievementCard {
  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();
  public readonly image = input.required<string>();
  public readonly alt = input.required<string>();
  public readonly footerLinks = input.required<readonly FooterLink[]>();
}

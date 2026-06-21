import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialMedia } from "../social-media/social-media";

@Component({
  selector: 'app-greeting',
  imports: [SocialMedia],
  templateUrl: './greeting.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './greeting.scss'
})
export class Greeting {
  protected readonly resume = 'resume/Carlos_Martos_Resume.pdf';
}

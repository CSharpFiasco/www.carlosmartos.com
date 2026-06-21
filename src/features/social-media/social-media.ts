import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss'
})
export class SocialMedia {
  protected readonly socialMediaLinks = {
  github: 'https://github.com/csharpfiasco',
  linkedin: 'https://www.linkedin.com/in/carlos-k-martos',
  gmail: 'carloskmartos@gmail.com',
  stackoverflow: 'https://stackoverflow.com/users/5303894/csharpfiasco',
} as const;
}

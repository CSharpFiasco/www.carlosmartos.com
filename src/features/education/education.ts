import { Component } from '@angular/core';
import { EducationCard } from "../education-card/education-card";

@Component({
  selector: 'app-education',
  imports: [EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  protected readonly educationInfo = [
  {
    schoolName: 'University of Tulsa',
    schoolUrl: 'https://utulsa.edu/',
    logo: '/images/the-university-of-tulsa.svg',
    subHeader: 'Bachelor of Science Computer Science',
    duration: 'September 2013 - May 2017',
    descBullets: [
      '⚡Data Structures',
      '⚡Database Systems',
      '⚡Comparative Programming Languages',
      '⚡Operating Systems',
      '⚡Linear Algebra and Matrix Theory',
    ],
  },
] as const;
}

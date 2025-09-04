import { Component, input } from '@angular/core';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss'
})
export class EducationCard {
  public readonly schoolName = input.required<string>();
  public readonly schoolUrl = input.required<string>();
  public readonly degree = input.required<string>();
  public readonly logoUrl = input.required<string>();
  public readonly duration = input.required<string>();
  public readonly bullets = input.required<readonly string[]>();
}

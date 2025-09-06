import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCard } from './education-card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('EducationCard', () => {
  let component: EducationCard;
  let fixture: ComponentFixture<EducationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementCard } from './achievement-card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AchievementCard', () => {
  let component: AchievementCard;
  let fixture: ComponentFixture<AchievementCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementCard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

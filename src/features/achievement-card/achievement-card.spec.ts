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
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementCard);
    component = fixture.componentInstance;
    // Provide required inputs before first change detection
    fixture.componentRef.setInput('title', 'Sample Title');
    fixture.componentRef.setInput('subtitle', 'Sample Subtitle');
    fixture.componentRef.setInput('image', 'test-image.png');
    fixture.componentRef.setInput('alt', 'Alt text');
    fixture.componentRef.setInput('footerLinks', [
      { name: 'Link A', url: 'https://example.com/a' },
      { name: 'Link B', url: 'https://example.com/b' }
    ]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

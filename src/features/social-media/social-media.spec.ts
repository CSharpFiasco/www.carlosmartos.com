import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMedia } from './social-media';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SocialMedia', () => {
  let component: SocialMedia;
  let fixture: ComponentFixture<SocialMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMedia],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render github link with correct url', () => {
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a.icon-button.github');
    expect(link).withContext('Github anchor not found').toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://github.com/csharpfiasco');
  });

  it('should render linkedin link with correct url', () => {
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a.icon-button.linkedin');
    expect(link).withContext('LinkedIn anchor not found').toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://www.linkedin.com/in/carlos-k-martos');
  });

  it('should render stackoverflow link with correct url', () => {
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a.icon-button.stack-overflow');
    expect(link).withContext('StackOverflow anchor not found').toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://stackoverflow.com/users/5303894/csharpfiasco');
  });
});

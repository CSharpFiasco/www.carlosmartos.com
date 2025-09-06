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
});

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
    }).compileComponents();

    fixture = TestBed.createComponent(EducationCard);
    component = fixture.componentInstance;
    // Set required input signal values prior to change detection
    fixture.componentRef.setInput('schoolName', 'Sample University');
    fixture.componentRef.setInput('schoolUrl', 'https://example.edu');
    fixture.componentRef.setInput('degree', 'B.S. in Testing');
    fixture.componentRef.setInput('logoUrl', 'logo.png');
    fixture.componentRef.setInput('duration', '2020 - 2024');
    fixture.componentRef.setInput('bullets', ['Bullet 1', 'Bullet 2']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

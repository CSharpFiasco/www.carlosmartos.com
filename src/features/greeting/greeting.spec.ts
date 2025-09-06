import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greeting } from './greeting';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Greeting', () => {
  let component: Greeting;
  let fixture: ComponentFixture<Greeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greeting],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Greeting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

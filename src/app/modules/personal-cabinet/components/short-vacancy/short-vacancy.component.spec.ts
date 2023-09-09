import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortVacancyComponent } from './short-vacancy.component';

describe('ShortVacancyComponent', () => {
  let component: ShortVacancyComponent;
  let fixture: ComponentFixture<ShortVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCabinetPageComponent } from './personal-cabinet-page.component';

describe('PersonalCabinetPageComponent', () => {
  let component: PersonalCabinetPageComponent;
  let fixture: ComponentFixture<PersonalCabinetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCabinetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCabinetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

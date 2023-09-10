import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSummaryPageComponent } from './create-summary-page.component';

describe('CreateSummaryPageComponent', () => {
  let component: CreateSummaryPageComponent;
  let fixture: ComponentFixture<CreateSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSummaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

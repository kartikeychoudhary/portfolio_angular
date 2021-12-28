import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsSectionComponent } from './qualifications-section.component';

describe('QualificationsSectionComponent', () => {
  let component: QualificationsSectionComponent;
  let fixture: ComponentFixture<QualificationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

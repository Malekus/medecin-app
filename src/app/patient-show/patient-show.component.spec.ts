import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientShowComponent } from './patient-show.component';

describe('PatientShowComponent', () => {
  let component: PatientShowComponent;
  let fixture: ComponentFixture<PatientShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

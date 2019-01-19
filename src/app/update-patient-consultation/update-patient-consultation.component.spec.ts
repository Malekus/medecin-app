import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientConsultationComponent } from './update-patient-consultation.component';

describe('UpdatePatientConsultationComponent', () => {
  let component: UpdatePatientConsultationComponent;
  let fixture: ComponentFixture<UpdatePatientConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatientConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

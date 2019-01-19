import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePatientConsultationComponent } from './remove-patient-consultation.component';

describe('RemovePatientConsultationComponent', () => {
  let component: RemovePatientConsultationComponent;
  let fixture: ComponentFixture<RemovePatientConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePatientConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePatientConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

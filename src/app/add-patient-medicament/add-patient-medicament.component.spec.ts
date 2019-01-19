import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientMedicamentComponent } from './add-patient-medicament.component';

describe('AddPatientMedicamentComponent', () => {
  let component: AddPatientMedicamentComponent;
  let fixture: ComponentFixture<AddPatientMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

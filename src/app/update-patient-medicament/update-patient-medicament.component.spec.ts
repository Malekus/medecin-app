import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientMedicamentComponent } from './update-patient-medicament.component';

describe('UpdatePatientMedicamentComponent', () => {
  let component: UpdatePatientMedicamentComponent;
  let fixture: ComponentFixture<UpdatePatientMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatientMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

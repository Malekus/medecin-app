import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePatientMedicamentComponent } from './remove-patient-medicament.component';

describe('RemovePatientMedicamentComponent', () => {
  let component: RemovePatientMedicamentComponent;
  let fixture: ComponentFixture<RemovePatientMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePatientMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePatientMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

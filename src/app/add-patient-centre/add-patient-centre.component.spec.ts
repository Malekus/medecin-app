import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientCentreComponent } from './add-patient-centre.component';

describe('AddPatientCentreComponent', () => {
  let component: AddPatientCentreComponent;
  let fixture: ComponentFixture<AddPatientCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

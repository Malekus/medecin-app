import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePatientCentreComponent } from './remove-patient-centre.component';

describe('RemovePatientCentreComponent', () => {
  let component: RemovePatientCentreComponent;
  let fixture: ComponentFixture<RemovePatientCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePatientCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePatientCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

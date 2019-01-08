import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinShowComponent } from './medecin-show.component';

describe('MedecinShowComponent', () => {
  let component: MedecinShowComponent;
  let fixture: ComponentFixture<MedecinShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

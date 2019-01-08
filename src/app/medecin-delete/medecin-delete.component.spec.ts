import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinDeleteComponent } from './medecin-delete.component';

describe('MedecinDeleteComponent', () => {
  let component: MedecinDeleteComponent;
  let fixture: ComponentFixture<MedecinDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

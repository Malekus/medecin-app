import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreAddComponent } from './centre-add.component';

describe('CentreAddComponent', () => {
  let component: CentreAddComponent;
  let fixture: ComponentFixture<CentreAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreShowComponent } from './titre-show.component';

describe('TitreShowComponent', () => {
  let component: TitreShowComponent;
  let fixture: ComponentFixture<TitreShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

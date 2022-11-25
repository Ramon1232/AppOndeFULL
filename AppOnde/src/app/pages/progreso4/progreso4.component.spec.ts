import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progreso4Component } from './progreso4.component';

describe('Progreso4Component', () => {
  let component: Progreso4Component;
  let fixture: ComponentFixture<Progreso4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Progreso4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Progreso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

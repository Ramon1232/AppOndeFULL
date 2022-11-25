import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioInsurgentesComponent } from './horario-insurgentes.component';

describe('HorarioInsurgentesComponent', () => {
  let component: HorarioInsurgentesComponent;
  let fixture: ComponentFixture<HorarioInsurgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioInsurgentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioInsurgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

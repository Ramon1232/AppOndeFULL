import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioLlanitosComponent } from './horario-llanitos.component';

describe('HorarioLlanitosComponent', () => {
  let component: HorarioLlanitosComponent;
  let fixture: ComponentFixture<HorarioLlanitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioLlanitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioLlanitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

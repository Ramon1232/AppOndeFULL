import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAllendeComponent } from './horario-allende.component';

describe('HorarioAllendeComponent', () => {
  let component: HorarioAllendeComponent;
  let fixture: ComponentFixture<HorarioAllendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioAllendeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioAllendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

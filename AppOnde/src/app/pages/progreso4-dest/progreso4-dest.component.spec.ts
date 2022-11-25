import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progreso4DestComponent } from './progreso4-dest.component';

describe('Progreso4DestComponent', () => {
  let component: Progreso4DestComponent;
  let fixture: ComponentFixture<Progreso4DestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Progreso4DestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Progreso4DestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

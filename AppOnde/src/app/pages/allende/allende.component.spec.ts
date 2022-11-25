import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllendeComponent } from './allende.component';

describe('AllendeComponent', () => {
  let component: AllendeComponent;
  let fixture: ComponentFixture<AllendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

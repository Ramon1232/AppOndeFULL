import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllendeDestComponent } from './allende-dest.component';

describe('AllendeDestComponent', () => {
  let component: AllendeDestComponent;
  let fixture: ComponentFixture<AllendeDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllendeDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllendeDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

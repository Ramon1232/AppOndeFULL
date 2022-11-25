import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlanitosDestComponent } from './llanitos-dest.component';

describe('LlanitosDestComponent', () => {
  let component: LlanitosDestComponent;
  let fixture: ComponentFixture<LlanitosDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlanitosDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlanitosDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

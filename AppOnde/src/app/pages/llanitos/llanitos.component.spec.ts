import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlanitosComponent } from './llanitos.component';

describe('LlanitosComponent', () => {
  let component: LlanitosComponent;
  let fixture: ComponentFixture<LlanitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlanitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlanitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

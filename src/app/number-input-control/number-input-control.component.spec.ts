import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputControlComponent } from './number-input-control.component';

describe('NumberInputControlComponent', () => {
  let component: NumberInputControlComponent;
  let fixture: ComponentFixture<NumberInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

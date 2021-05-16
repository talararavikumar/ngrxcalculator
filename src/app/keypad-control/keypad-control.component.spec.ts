import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypadControlComponent } from './keypad-control.component';

describe('KeypadControlComponent', () => {
  let component: KeypadControlComponent;
  let fixture: ComponentFixture<KeypadControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypadControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypadControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

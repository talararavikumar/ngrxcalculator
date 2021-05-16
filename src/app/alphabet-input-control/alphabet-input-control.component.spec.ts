import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetInputControlComponent } from './alphabet-input-control.component';

describe('AlphabetInputControlComponent', () => {
  let component: AlphabetInputControlComponent;
  let fixture: ComponentFixture<AlphabetInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetInputControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

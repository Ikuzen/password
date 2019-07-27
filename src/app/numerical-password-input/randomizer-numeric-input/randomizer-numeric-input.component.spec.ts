import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizerNumericInputComponent } from './randomizer-numeric-input.component';

describe('RandomizerNumericInputComponent', () => {
  let component: RandomizerNumericInputComponent;
  let fixture: ComponentFixture<RandomizerNumericInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizerNumericInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizerNumericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

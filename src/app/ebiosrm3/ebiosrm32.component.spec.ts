import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm32Component } from './ebiosrm32.component';

describe('Ebiosrm32Component', () => {
  let component: Ebiosrm32Component;
  let fixture: ComponentFixture<Ebiosrm32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm13Component } from './ebiosrm13.component';

describe('Ebiosrm13Component', () => {
  let component: Ebiosrm13Component;
  let fixture: ComponentFixture<Ebiosrm13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

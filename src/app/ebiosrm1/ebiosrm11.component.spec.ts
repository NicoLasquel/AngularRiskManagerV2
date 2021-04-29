import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm11Component } from './ebiosrm11.component';

describe('Ebiosrm11Component', () => {
  let component: Ebiosrm11Component;
  let fixture: ComponentFixture<Ebiosrm11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm51Component } from './ebiosrm51.component';

describe('Ebiosrm51Component', () => {
  let component: Ebiosrm51Component;
  let fixture: ComponentFixture<Ebiosrm51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

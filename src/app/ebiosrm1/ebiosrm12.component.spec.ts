import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm12Component } from './ebiosrm12.component';

describe('Ebiosrm12Component', () => {
  let component: Ebiosrm12Component;
  let fixture: ComponentFixture<Ebiosrm12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

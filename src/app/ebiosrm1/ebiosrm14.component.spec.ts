import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm14Component } from './ebiosrm14.component';

describe('Ebiosrm14Component', () => {
  let component: Ebiosrm14Component;
  let fixture: ComponentFixture<Ebiosrm14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

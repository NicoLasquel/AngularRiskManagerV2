import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm42Component } from './ebiosrm42.component';

describe('Ebiosrm42Component', () => {
  let component: Ebiosrm42Component;
  let fixture: ComponentFixture<Ebiosrm42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

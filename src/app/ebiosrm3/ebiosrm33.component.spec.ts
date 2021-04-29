import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm33Component } from './ebiosrm33.component';

describe('Ebiosrm33Component', () => {
  let component: Ebiosrm33Component;
  let fixture: ComponentFixture<Ebiosrm33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm52Component } from './ebiosrm52.component';

describe('Ebiosrm52Component', () => {
  let component: Ebiosrm52Component;
  let fixture: ComponentFixture<Ebiosrm52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

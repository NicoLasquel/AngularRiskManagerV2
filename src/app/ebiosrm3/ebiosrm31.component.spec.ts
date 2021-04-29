import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm31Component } from './ebiosrm31.component';

describe('Ebiosrm31Component', () => {
  let component: Ebiosrm31Component;
  let fixture: ComponentFixture<Ebiosrm31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

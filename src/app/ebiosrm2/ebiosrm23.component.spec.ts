import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm23Component } from './ebiosrm23.component';

describe('Ebiosrm23Component', () => {
  let component: Ebiosrm23Component;
  let fixture: ComponentFixture<Ebiosrm23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

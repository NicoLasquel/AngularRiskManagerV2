import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm21Component } from './ebiosrm21.component';

describe('Ebiosrm21Component', () => {
  let component: Ebiosrm21Component;
  let fixture: ComponentFixture<Ebiosrm21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

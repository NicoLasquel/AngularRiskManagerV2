import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm53Component } from './ebiosrm53.component';

describe('Ebiosrm53Component', () => {
  let component: Ebiosrm53Component;
  let fixture: ComponentFixture<Ebiosrm53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

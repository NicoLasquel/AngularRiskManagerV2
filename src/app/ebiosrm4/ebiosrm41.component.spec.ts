import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm41Component } from './ebiosrm41.component';

describe('Ebiosrm41Component', () => {
  let component: Ebiosrm41Component;
  let fixture: ComponentFixture<Ebiosrm41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

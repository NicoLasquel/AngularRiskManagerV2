import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebiosrm22Component } from './ebiosrm22.component';

describe('Ebiosrm22Component', () => {
  let component: Ebiosrm22Component;
  let fixture: ComponentFixture<Ebiosrm22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebiosrm22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebiosrm22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

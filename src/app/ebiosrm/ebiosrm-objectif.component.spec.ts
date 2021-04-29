import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbiosrmObjectifComponent } from './ebiosrm-objectif.component';

describe('EbiosrmObjectifComponent', () => {
  let component: EbiosrmObjectifComponent;
  let fixture: ComponentFixture<EbiosrmObjectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbiosrmObjectifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbiosrmObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleganteComponent } from './elegante.component';

describe('EleganteComponent', () => {
  let component: EleganteComponent;
  let fixture: ComponentFixture<EleganteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EleganteComponent]
    });
    fixture = TestBed.createComponent(EleganteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

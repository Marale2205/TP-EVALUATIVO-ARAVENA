import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanoComponent } from './urbano.component';

describe('UrbanoComponent', () => {
  let component: UrbanoComponent;
  let fixture: ComponentFixture<UrbanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrbanoComponent]
    });
    fixture = TestBed.createComponent(UrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

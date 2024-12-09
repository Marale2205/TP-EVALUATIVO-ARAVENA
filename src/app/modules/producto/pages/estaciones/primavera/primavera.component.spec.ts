import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaveraComponent } from './primavera.component';

describe('PrimaveraComponent', () => {
  let component: PrimaveraComponent;
  let fixture: ComponentFixture<PrimaveraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaveraComponent]
    });
    fixture = TestBed.createComponent(PrimaveraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranoComponent } from './verano.component';

describe('VeranoComponent', () => {
  let component: VeranoComponent;
  let fixture: ComponentFixture<VeranoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeranoComponent]
    });
    fixture = TestBed.createComponent(VeranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

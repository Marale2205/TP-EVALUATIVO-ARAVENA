import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtonoComponent } from './otono.component';

describe('OtonoComponent', () => {
  let component: OtonoComponent;
  let fixture: ComponentFixture<OtonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtonoComponent]
    });
    fixture = TestBed.createComponent(OtonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

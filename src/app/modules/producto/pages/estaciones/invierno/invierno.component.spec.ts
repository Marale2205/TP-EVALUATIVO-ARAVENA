import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviernoComponent } from './invierno.component';

describe('InviernoComponent', () => {
  let component: InviernoComponent;
  let fixture: ComponentFixture<InviernoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviernoComponent]
    });
    fixture = TestBed.createComponent(InviernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

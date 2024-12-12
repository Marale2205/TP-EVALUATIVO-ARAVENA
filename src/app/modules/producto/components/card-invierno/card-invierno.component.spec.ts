import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInviernoComponent } from './card-invierno.component';

describe('CardInviernoComponent', () => {
  let component: CardInviernoComponent;
  let fixture: ComponentFixture<CardInviernoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInviernoComponent]
    });
    fixture = TestBed.createComponent(CardInviernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

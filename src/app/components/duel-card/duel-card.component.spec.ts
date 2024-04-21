import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelCardComponent } from './duel-card.component';

describe('DuelCardComponent', () => {
  let component: DuelCardComponent;
  let fixture: ComponentFixture<DuelCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuelCardComponent]
    });
    fixture = TestBed.createComponent(DuelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

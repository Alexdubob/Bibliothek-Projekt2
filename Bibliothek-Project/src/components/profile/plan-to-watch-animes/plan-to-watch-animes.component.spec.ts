import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToWatchAnimesComponent } from './plan-to-watch-animes.component';

describe('PlanToWatchAnimesComponent', () => {
  let component: PlanToWatchAnimesComponent;
  let fixture: ComponentFixture<PlanToWatchAnimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanToWatchAnimesComponent]
    });
    fixture = TestBed.createComponent(PlanToWatchAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

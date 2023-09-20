import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimePopularComponent } from './all-time-popular.component';

describe('AllTimePopularComponent', () => {
  let component: AllTimePopularComponent;
  let fixture: ComponentFixture<AllTimePopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimePopularComponent]
    });
    fixture = TestBed.createComponent(AllTimePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

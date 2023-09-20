import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSeasonComponent } from './current-season.component';

describe('CurrentSeasonComponent', () => {
  let component: CurrentSeasonComponent;
  let fixture: ComponentFixture<CurrentSeasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentSeasonComponent]
    });
    fixture = TestBed.createComponent(CurrentSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

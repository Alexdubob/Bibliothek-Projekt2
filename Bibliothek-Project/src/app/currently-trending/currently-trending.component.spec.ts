import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyTrendingComponent } from './currently-trending.component';

describe('CurrentlyTrendingComponent', () => {
  let component: CurrentlyTrendingComponent;
  let fixture: ComponentFixture<CurrentlyTrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentlyTrendingComponent]
    });
    fixture = TestBed.createComponent(CurrentlyTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

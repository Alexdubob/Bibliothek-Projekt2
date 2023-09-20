import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRankedComponent } from './top-ranked.component';

describe('TopRankedComponent', () => {
  let component: TopRankedComponent;
  let fixture: ComponentFixture<TopRankedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRankedComponent]
    });
    fixture = TestBed.createComponent(TopRankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

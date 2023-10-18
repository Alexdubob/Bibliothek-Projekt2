import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesWatchingComponent } from './animes-watching.component';

describe('AnimesWatchingComponent', () => {
  let component: AnimesWatchingComponent;
  let fixture: ComponentFixture<AnimesWatchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimesWatchingComponent]
    });
    fixture = TestBed.createComponent(AnimesWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

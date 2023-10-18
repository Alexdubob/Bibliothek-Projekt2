import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAnimesComponent } from './favourite-animes.component';

describe('FavouriteAnimesComponent', () => {
  let component: FavouriteAnimesComponent;
  let fixture: ComponentFixture<FavouriteAnimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteAnimesComponent]
    });
    fixture = TestBed.createComponent(FavouriteAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

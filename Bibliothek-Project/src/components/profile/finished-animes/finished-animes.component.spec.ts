import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedAnimesComponent } from './finished-animes.component';

describe('FinishedAnimesComponent', () => {
  let component: FinishedAnimesComponent;
  let fixture: ComponentFixture<FinishedAnimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishedAnimesComponent]
    });
    fixture = TestBed.createComponent(FinishedAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

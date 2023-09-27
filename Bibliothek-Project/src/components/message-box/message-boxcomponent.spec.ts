import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxComponent } from './message-box.component';

describe('LogoutDialogComponent', () => {
  let component: MessageBoxComponent;
  let fixture: ComponentFixture<MessageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageBoxComponent]
    });
    fixture = TestBed.createComponent(MessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

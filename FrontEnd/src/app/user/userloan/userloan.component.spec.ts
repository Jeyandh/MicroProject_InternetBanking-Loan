import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloanComponent } from './userloan.component';

describe('UserloanComponent', () => {
  let component: UserloanComponent;
  let fixture: ComponentFixture<UserloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserloanComponent]
    });
    fixture = TestBed.createComponent(UserloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

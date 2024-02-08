import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyloansComponent } from './applyloans.component';

describe('ApplyloansComponent', () => {
  let component: ApplyloansComponent;
  let fixture: ComponentFixture<ApplyloansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyloansComponent]
    });
    fixture = TestBed.createComponent(ApplyloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

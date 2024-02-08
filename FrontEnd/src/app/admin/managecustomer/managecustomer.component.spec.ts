import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecustomerComponent } from './managecustomer.component';

describe('ManagecustomerComponent', () => {
  let component: ManagecustomerComponent;
  let fixture: ComponentFixture<ManagecustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagecustomerComponent]
    });
    fixture = TestBed.createComponent(ManagecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

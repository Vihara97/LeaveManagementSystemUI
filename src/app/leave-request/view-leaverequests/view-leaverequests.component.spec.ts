import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaverequestsComponent } from './view-leaverequests.component';

describe('ViewLeaverequestsComponent', () => {
  let component: ViewLeaverequestsComponent;
  let fixture: ComponentFixture<ViewLeaverequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaverequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaverequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

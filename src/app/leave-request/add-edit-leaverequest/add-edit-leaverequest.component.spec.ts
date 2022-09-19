import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeaverequestComponent } from './add-edit-leaverequest.component';

describe('AddEditLeaverequestComponent', () => {
  let component: AddEditLeaverequestComponent;
  let fixture: ComponentFixture<AddEditLeaverequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLeaverequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLeaverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

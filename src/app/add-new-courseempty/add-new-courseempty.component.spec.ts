import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseemptyComponent } from './add-new-courseempty.component';

describe('AddNewCourseemptyComponent', () => {
  let component: AddNewCourseemptyComponent;
  let fixture: ComponentFixture<AddNewCourseemptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCourseemptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCourseemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

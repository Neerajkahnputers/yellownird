import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraQuestionInfoComponent } from './extra-question-info.component';

describe('ExtraQuestionInfoComponent', () => {
  let component: ExtraQuestionInfoComponent;
  let fixture: ComponentFixture<ExtraQuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraQuestionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraQuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

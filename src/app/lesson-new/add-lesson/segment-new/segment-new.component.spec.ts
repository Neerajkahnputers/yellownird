import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentNewComponent } from './segment-new.component';

describe('SegmentNewComponent', () => {
  let component: SegmentNewComponent;
  let fixture: ComponentFixture<SegmentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

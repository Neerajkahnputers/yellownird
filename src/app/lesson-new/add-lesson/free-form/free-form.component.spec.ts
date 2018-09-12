import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeFormComponent } from './free-form.component';

describe('FreeFormComponent', () => {
  let component: FreeFormComponent;
  let fixture: ComponentFixture<FreeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

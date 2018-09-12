import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowShipComponent } from './fellow-ship.component';

describe('FellowShipComponent', () => {
  let component: FellowShipComponent;
  let fixture: ComponentFixture<FellowShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgqTimepickerComponent } from './ngq-timepicker.component';

describe('NgqTimepickerComponent', () => {
  let component: NgqTimepickerComponent;
  let fixture: ComponentFixture<NgqTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgqTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgqTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

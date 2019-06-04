import { TestBed } from '@angular/core/testing';

import { NgqTimepickerService } from './ngq-timepicker.service';

describe('NgqTimepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgqTimepickerService = TestBed.get(NgqTimepickerService);
    expect(service).toBeTruthy();
  });
});

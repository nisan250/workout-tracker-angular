import { TestBed } from '@angular/core/testing';

import { WorkoutsResolverService } from './workouts-resolver.service';

describe('WorkoutsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutsResolverService = TestBed.get(WorkoutsResolverService);
    expect(service).toBeTruthy();
  });
});

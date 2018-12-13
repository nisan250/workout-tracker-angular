import { TestBed } from '@angular/core/testing';

import { WorkoutResolverService } from './workout-resolver.service';

describe('WorkoutResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutResolverService = TestBed.get(WorkoutResolverService);
    expect(service).toBeTruthy();
  });
});

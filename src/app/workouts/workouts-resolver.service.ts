import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, throwError, forkJoin } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

import { WorkoutsApiService } from '../services/workouts-api.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsResolverService  implements Resolve<any[]> {

  constructor(private workoutService: WorkoutsApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return forkJoin(
      this.workoutService.getWorkoutsTotal(),
      this.workoutService.getWorkouts(),
      // this.workoutService.getWorkoutsPaged(this.currPage, this.pageSize), // TEMPO
      this.workoutService.getPerfTargets(),
    );
  }
}

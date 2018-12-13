import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

import { WorkoutsApiService } from '../services/workouts-api.service';


@Injectable({
  providedIn: 'root'
})
export class WorkoutResolverService implements Resolve<any> {

  constructor(private workoutService: WorkoutsApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (route.params['id'] !== 'new') {
      return this.workoutService.getWorkout(+route.params['id']);
    } else {
      return route.params['id'];
    }
  }
}

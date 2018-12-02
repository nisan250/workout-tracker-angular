import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/workouts`).pipe(
      catchError(this.handleError)
    );
  }

  getWorkout(id: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/workouts/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addWorkout(workout: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/workouts`, workout).pipe(
      catchError(this.handleError)
    );
  }

  updateWorkout(workout: any): Observable<any>  {
    return this.http.put<any>(`${this.baseUrl}/workouts/${workout.id}`, workout).pipe(
      catchError(this.handleError)
    );
  }

  saveWorkout(workout: any) {
    if (workout.id) {
      return this.updateWorkout(workout);
    } else {
      return  this.addWorkout(workout);
    }
  }

  deleteWorkout(id: number) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }

  getLocations(): Observable<any[]>  {
    return this.http.get<any[]>(`${this.baseUrl}/locations`).pipe(
      catchError(this.handleError)
    );
  }

  searchLocations(searchTerm: string): Observable<any[]>  {
    return this.http.get<any[]>(`${this.baseUrl}/locations?q=${searchTerm}`).pipe(
      catchError(this.handleError)
    );
  }

  getPerfTargets(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/performanceTargets`).pipe(
      catchError(this.handleError)
    );
  }

  savePerfTargets(perfTargets: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/performanceTargets`, perfTargets).pipe(
      catchError(this.handleError)
    );
  }

  getWorkoutsPaged(currPage: number, pageSize: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/workouts?_page=${currPage}&_limit=${pageSize}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side or network error
      errorMessage = `client-side or network error ---> error  ${err.message}`;
    } else {
      // backend error with response code
      errorMessage = `backend error with response code or network error ---> error ${err.message}`;
      alert(`To use this app in action you have to downlowd the data/db.json file
              from the github repository to your local machine and run json-server(localhost:3000)`);
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

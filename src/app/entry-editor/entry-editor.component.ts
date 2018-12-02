import { Component, OnInit } from '@angular/core';
import { WorkoutsApiService } from '../services/workouts-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {  debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-entry-editor',
  templateUrl: './entry-editor.component.html',
  styleUrls: ['./entry-editor.component.scss']
})
export class EntryEditorComponent implements OnInit {
  public workout: any = {};
  public loading = false;
  public startDate: any;
  public maxDate: NgbDateStruct;
  // public locations = ['Main gym', 'Home gym', 'neighborhood 1 mile course', 'neighborhood 3 mile course'];
  public locations = [];
  public errorMessage = '';

  constructor(
    private router: ActivatedRoute,
    private nav: Router,
    private workoutService: WorkoutsApiService) {
      const today = new Date();
      this.maxDate = NgbDate.from({ year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate()});
      // console.log(this.maxDate, 'this.maxDate');
    }

  ngOnInit(): void {
    // this.workoutService.getLocations().subscribe(data => this.locations = data);

    this.router.params.subscribe(params => {
      if (params.id !== 'new') {
        this.loading = true;
        this.workoutService.getWorkout(params.id).subscribe(data => {
          this.workout = data;
          const d = new Date(this.workout.date);
          this.startDate = {year: d.getFullYear(), month: d.getMonth() + 1};
          this.loading = false;
        },
          error => this.errorMessage = <any>error
        );
      }
    });
  }

  // client side filtering
  // locationsSearch = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : this.locations.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )
  //   locationsFormatter = (result) => result.name;

  // server side filtering
  locationsSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.workoutService.searchLocations(term)),
      map(locations => _.map(locations, 'name')),
      tap(() => this.loading = false)
    )

  locationsFormatter = (result) => result;

  save() {
    this.loading = true;
    this.workoutService.saveWorkout(this.workout).subscribe(data => {
      // this.workout = data;
      this.loading = false;
      this.nav.navigate(['/workouts']);
    },
      error => this.errorMessage = <any>error
    );
  }

  popVisibilityChanged(pop) {
    // console.log(`Popover open state: ${ pop.isOpen() }`);
  }
}

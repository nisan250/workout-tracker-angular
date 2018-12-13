import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutsApiService } from '../services/workouts-api.service';
import * as _ from 'lodash';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { PerformanceTargetsModalComponent } from '../performance-targets-modal/performance-targets-modal.component';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  encapsulation: ViewEncapsulation.None  // to have css style on tooltip
})
export class WorkoutsComponent implements OnInit {
  public workouts = [];
  // public workoutsOrig = [];
  public loading = false;
  public perfTargets = {};
  public workoutsTotal;
  public totals = {};
  public pageSize = 5;
  public currPage = 1;
  public errorMessage = '';
  public workoutss = [];

  constructor(private route: ActivatedRoute, private workoutService: WorkoutsApiService, private modal: NgbModal) { }

  ngOnInit() {
    // this.loading = true;
    // this.workoutService.getWorkouts().subscribe((data) => {
    //   this.workouts = data;
    //   this.loading = false;
    // });
    // this.workoutService.getPerfTargets()

    // this.loading = true;
    // USING RESOLVER
    this.workoutss = this.route.snapshot.data['workouts'];
    this.workoutsTotal = this.route.snapshot.data['workouts'][0];
    this.workouts = this.route.snapshot.data['workouts'][1];
    this.perfTargets = this.route.snapshot.data['workouts'][2];
    // console.log(this.perfTargets);
    this.calculatePerformance();
    this.loading = false;

    // forkJoin(
    //   this.workoutService.getWorkoutsTotal(),
    //   this.workoutService.getWorkouts(),
    //   // this.workoutService.getWorkoutsPaged(this.currPage, this.pageSize), // TEMPO
    //   this.workoutService.getPerfTargets(),
    // ).subscribe(([workoutsTotal, workoutsResult, perfTargetsResult]) => {
    //     this.workoutsTotal = workoutsTotal.workoutsAmount;
    //     // this.workoutsOrig = workoutsResult;
    //     this.workouts = workoutsResult;
    //     // this.refreshGrid();
    //     this.perfTargets = perfTargetsResult;
    //     this.calculatePerformance();
    //     this.loading = false;
    //     console.log('--workouts', this.workouts, this.perfTargets);
    // },
    //   error => this.errorMessage = <any>error
    // );
  }

  refreshGrid() {
    // client side filtering (pagination)
    // const offset = (this.currPage - 1) * this.pageSize;
    // this.workouts = _.drop(this.workoutsOrig, offset).slice(0, this.pageSize);

    // server side filtering (pagination)
    this.loading = true;
    this.workoutService.getWorkoutsPaged(this.currPage, this.pageSize).subscribe(data => {
      this.workouts = data;
      this.loading = false;
    },
      error => this.errorMessage = <any>error
    );
  }


  deleteWorkout(id, deleteModal) {
    const options: NgbModalOptions =  {size: 'sm'};
    this.modal.open(deleteModal, options).result.then(result => {
      this.workoutService.deleteWorkout(id).subscribe(
        data => _.remove(this.workouts, { id: id }),
        error => this.errorMessage = <any>error
      );
    }, reason => console.log(`Dismissed: ${reason}`));
  }

  showPerfTargets() {
    const modalRef = this.modal.open(PerformanceTargetsModalComponent);
    modalRef.componentInstance.perfTargets = this.perfTargets;
    modalRef.result.then(result => {
      // console.log('Modal result', result);
      this.loading = true;
      this.workoutService.savePerfTargets(result).subscribe(data => {
        this.perfTargets = data;
        this.loading = false;
      },
        error => this.errorMessage = <any>error
      );
    }, reason => {
      // console.log(`Dismissed reason: ${reason}`);
    });
  }

  calculatePerformance() {
    const bikeTotal = _.chain(this.workouts).filter(x => x.type === 'bike').sumBy(x => +x.distance).value();
    const rowTotal = _.chain(this.workouts).filter(x => x.type === 'row').sumBy(x => +x.distance).value();
    const runTotal = _.chain(this.workouts).filter(x => x.type === 'run').sumBy(x => +x.distance).value();
    this.totals = { bike: bikeTotal, row: rowTotal, run: runTotal };
    // console.log('**totals', this.totals);
  }

  getPBType(total: number, target: number) {
    const pct = (total / target) * 100;

    if (pct <= 25) {
      return 'success';
    } else if (pct > 25 && pct <= 50) {
      return 'info';
    } else if (pct > 50 && pct <= 75) {
      return 'warning';
    } else if (pct > 75) {
      return 'danger';
    }
  }

}

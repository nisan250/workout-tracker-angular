import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  public totals = {};
  public pageSize = 5;
  public currPage = 1;

  constructor(private workoutService: WorkoutsApiService, private modal: NgbModal) { }

  ngOnInit() {
    // this.loading = true;
    // this.workoutService.getWorkouts().subscribe((data) => {
    //   this.workouts = data;
    //   this.loading = false;
    // });
    // this.workoutService.getPerfTargets()

    this.loading = true;
    forkJoin(
      // this.workoutService.getWorkouts(),
      this.workoutService.getWorkoutsPaged(this.currPage, this.pageSize),
      this.workoutService.getPerfTargets()
    ).subscribe(([workoutsResult, perfTargetsResult]) => {
        // this.workoutsOrig = workoutsResult;
        this.workouts = workoutsResult;
        // this.refreshGrid();
        this.perfTargets = perfTargetsResult;
        this.calculatePerformance();
        this.loading = false;
        console.log('--workouts', this.workouts, this.perfTargets);
    });
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
    });
  }


  deleteWorkout(id, deleteModal) {
    const options: NgbModalOptions =  {size: 'sm'};
    this.modal.open(deleteModal, options).result.then(result => {
      this.workoutService.deleteWorkout(id).subscribe(data => _.remove(this.workouts, { id: id }));
    }, reason => console.log(`Dismissed: ${reason}`));
  }

  showPerfTargets() {
    const modalRef = this.modal.open(PerformanceTargetsModalComponent);
    modalRef.componentInstance.perfTargets = this.perfTargets;
    modalRef.result.then(result => {
      console.log('Modal result', result);
      this.loading = true;
      this.workoutService.savePerfTargets(result).subscribe(data => {
        this.perfTargets = data;
        this.loading = false;
      });
    }, reason => {
      console.log(`Dismissed reason: ${reason}`);
    });
  }

  calculatePerformance() {
    const bikeTotal = _.chain(this.workouts).filter(x => x.type === 'bike').sumBy(x => +x.distance).value();
    const rowTotal = _.chain(this.workouts).filter(x => x.type === 'row').sumBy(x => +x.distance).value();
    const runTotal = _.chain(this.workouts).filter(x => x.type === 'run').sumBy(x => +x.distance).value();
    this.totals = { bike: bikeTotal, row: rowTotal, run: runTotal };
    console.log('**totals', this.totals);
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

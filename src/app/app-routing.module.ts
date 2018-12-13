import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { AdminComponent } from './admin/admin.component';
import { WorkoutResolverService } from './entry-editor/workout-resolver.service';
import { WorkoutsResolverService } from './workouts/workouts-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'workouts', component: WorkoutsComponent, resolve: { workouts: WorkoutsResolverService}},
  {path: 'workouts/:id', component: EntryEditorComponent, resolve: { workout: WorkoutResolverService}},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

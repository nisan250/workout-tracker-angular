import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WorkoutsData } from './services/workouts-data';

// Third party imports
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WorkoutsApiService } from './services/workouts-api.service';
import { DateStringAdapterService } from './services/date-string-adapter.service';
import { PerformanceTargetsModalComponent } from './performance-targets-modal/performance-targets-modal.component';
import { AdminComponent } from './admin/admin.component';
import { WorkoutResolverService } from './entry-editor/workout-resolver.service';
import { WorkoutsResolverService } from './workouts/workouts-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    EntryEditorComponent,
    NavMenuComponent,
    PerformanceTargetsModalComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(WorkoutsData)
  ],
  providers: [
    WorkoutsApiService,
    WorkoutResolverService,
    WorkoutsResolverService,
    { provide: NgbDateAdapter, useClass: DateStringAdapterService }
  ],
  entryComponents: [
  PerformanceTargetsModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

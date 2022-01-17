import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardViewComponent } from './pages/dashboard-view/dashboard-view.component';
import { NewProfileComponent } from './pages/new-profile/new-profile.component';
import { FormsModule } from '@angular/forms';
import { DeleteProfileComponent } from './pages/delete-profile/delete-profile.component';
import { DeleteWorkoutComponent } from './pages/delete-workout/delete-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    NewProfileComponent,
    DeleteProfileComponent,
    DeleteWorkoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './pages/dashboard-view/dashboard-view.component';
import { DeleteProfileComponent } from './pages/delete-profile/delete-profile.component';
import { DeleteWorkoutComponent } from './pages/delete-workout/delete-workout.component';
import { NewProfileComponent } from './pages/new-profile/new-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardViewComponent },
  { path: 'dashboard/:profileId', component: DashboardViewComponent },
  { path: 'new-profile', component: NewProfileComponent },
  { path: 'dashboard/:profileId/delete-profile', component: DeleteProfileComponent },
  { path: 'dashboard/:profileId/delete-workout/:workoutId/:workoutName', component: DeleteWorkoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Profile } from 'src/app/models/profile.model';
import { Workout } from 'src/app/models/workout.model';
import { browserRefresh } from '../../app.component';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  profiles: Profile[] = [];
  profileId: string = "";
  workouts: Workout[] = [];
  WorkoutTextInput: string = "";
  selectedWorkoutType: string = "Select a Workout";
  selectedWorkoutLastDate: string = "";
  selectedWorkoutLastWeight: any | undefined;
  selectedWorkoutLastReps: any | undefined;
  SelectedWorkoutName: string = "";
  SelectedWorkoutId: string = "";
  menuToggle: String = "dropdown";
  menuState: boolean = false;
  weightInputNumber: any = "Enter Weight...";
  repsInputNumber: any = "Enter Reps...";

  public browserRefresh: boolean = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.browserRefresh = browserRefresh;
    if (browserRefresh) {
      this.router.navigate(['/dashboard']);
    }
    this.route.params.subscribe((params: Params) => {
      if (params['profileId']) {
        this.apiService.getWorkouts(params['profileId']).subscribe((workouts: Workout[] | any) => {
          this.workouts = workouts;
          this.profileId = params['profileId'];
        });
      }
      else {
        this.workouts = undefined!;
      }
    });
    this.apiService.getProfiles().subscribe((profiles: Profile[] | any) => {
      this.profiles = profiles;
    });
  }

  toggleMenu() {
    if (this.menuState) {
      this.menuToggle = "dropdown";
      this.menuState = false;
    }
    else {
      this.menuToggle = "dropdown is-active";
      this.menuState = true;
    }
  }

  manageMenu() {
    this.menuToggle = "dropdown";
    this.menuState = false;
    this.selectedWorkoutType = "Select a Workout"
    this.selectedWorkoutLastDate = "";
    this.selectedWorkoutLastWeight = "";
    this.selectedWorkoutLastReps = "";
  }

  getWorkoutInfo(workout: Workout[] | any) {
    let date = new Date(workout.workout.date);
    let sDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    this.selectedWorkoutType = workout.workout.workoutType.workoutName;
    this.selectedWorkoutLastDate = sDate;
    this.selectedWorkoutLastWeight = workout.workout.workoutType.weight + " LBS";
    this.selectedWorkoutLastReps = workout.workout.workoutType.reps + " REPS";
    this.SelectedWorkoutName = workout.workout.name;
    this.SelectedWorkoutId = workout.profileId;
  }

  addWorkoutInfo(workoutName: string) {
    let name = "";
    let _profileId = "";
    this.route.params.subscribe((params: Params) => {
      this.profiles.forEach((person: Profile | any) => {
        if (person._id == params['profileId']) {
          name = person.profile;
          _profileId = person._id;
        }
      });
    })
    let workout = new Workout();
    workout = {
      _id: "",
      workout: {
        name: name,
        date: Date.now(),
        workoutType: {
          workoutName: workoutName,
          weight: 0,
          reps: 0
        }
      },
      profileId: _profileId
    }
    this.apiService.postWorkout(_profileId, workout).subscribe((res) => {
      this.router.navigate(['/dashboard', _profileId]);
    });
  }

  updateWorkoutInfo(_weight: string, _reps: string) {
    let updatedWorkout = new Workout();
    this.workouts.forEach((element) => {
      if(element.workout.workoutType.workoutName == this.selectedWorkoutType) {
        updatedWorkout = element;
      }
    });
    updatedWorkout!.workout.date = Date.now();
    updatedWorkout!.workout.workoutType.weight = parseInt(_weight);
    updatedWorkout!.workout.workoutType.reps = parseInt(_reps);
    this.apiService.updateWorkout(this.SelectedWorkoutId, updatedWorkout!._id, updatedWorkout!).subscribe((res) => {
      this.router.navigate(['/dashboard']);
    });
  }

  deleteWorkout(_id: string, name: string) {
    this.router.navigate([ '/dashboard', this.profileId, 'delete-workout', _id, name]);
  }
}

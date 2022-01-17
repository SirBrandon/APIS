import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-delete-workout',
  templateUrl: './delete-workout.component.html',
  styleUrls: ['./delete-workout.component.scss']
})
export class DeleteWorkoutComponent implements OnInit {
  profileId: string = "";
  workoutId: string = "";
  workoutName: string = "";

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileId = params['profileId'];
      this.workoutId = params['workoutId'];
      this.workoutName = params['workoutName'];
      this.workoutName.replace("%20", " ");
    });
  }

  deleteWorkout() {
    this.apiService.deleteWorkout(this.profileId, this.workoutId).subscribe((res) => {
      this.router.navigate([ '/dashboard' ]);
    })
  }
}

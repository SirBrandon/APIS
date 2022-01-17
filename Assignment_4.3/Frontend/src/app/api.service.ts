import { Injectable } from '@angular/core';
import { Workout } from './models/workout.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private webReqService: WebRequestService) { }

  getProfiles() {
    return this.webReqService.get('profiles');
  }

  createProfile(name: Object) {
    return this.webReqService.post('profiles', name);
  }

  deleteProfile(profileId: string) {
    return this.webReqService.delete(`profiles/${profileId}`);
  }

  getWorkouts(profileId: string) {
    return this.webReqService.getWorkouts(`profiles/${profileId}/workouts`);
  }

  postWorkout(profileId: string, workout: Workout) {
    return this.webReqService.postWorkout(`profiles/${profileId}/workouts`, workout);
  }

  updateWorkout(profileId: string, workoutId: string, workout: Workout) {
    return this.webReqService.updateWorkout(`profiles/${profileId}/workouts/${workoutId}`, workout);
  }

  deleteWorkout(profileId: string, workoutId: string) {
    return this.webReqService.deleteWorkout(`profiles/${profileId}/workouts/${workoutId}`);
  }
}

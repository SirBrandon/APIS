import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from './models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  getWorkouts(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  postWorkout(uri: string, payload: Workout | any) {
    delete payload._id;
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  updateWorkout(uri: string, payload: Workout | any) {
    delete payload._id;
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  deleteWorkout(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}

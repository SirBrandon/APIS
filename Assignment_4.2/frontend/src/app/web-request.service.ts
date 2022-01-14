import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:8080";
  }

  getMostSacks(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getMostRushingYards(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getMostTouchdowns(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getLeastRushingYards(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getFieldGoalsAscending(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getPlayers(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  createPlayer(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  
  updatePlayer(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  deletePlayer(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}

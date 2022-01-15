import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private webReqService: WebRequestService) { }

  getProfiles() {
    return this.webReqService.get('profiles');
  }
}

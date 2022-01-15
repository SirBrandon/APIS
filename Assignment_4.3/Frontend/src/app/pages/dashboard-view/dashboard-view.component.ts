import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.apiService.getProfiles().subscribe((profiles: Profile[] | any) => {
      this.profiles = profiles;
    });
  }
}

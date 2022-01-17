import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.scss']
})
export class NewProfileComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }

  createProfile(name: string) {
    this.apiService.createProfile({ "profile": name }).subscribe((profile: Profile | any) => {
      this.router.navigate([ '/dashboard', profile._id ]);
    });
  }
}

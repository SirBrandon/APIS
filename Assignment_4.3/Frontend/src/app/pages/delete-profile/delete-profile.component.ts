import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {
  profileName: string = "";
  profileId: string = "";

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.apiService.getProfiles().subscribe((profile: Profile | any) => {
        profile.forEach((person: Profile) => {
          if (person._id == params['profileId']) {
            this.profileName = person.profile;
            this.profileId = person._id;
          }
        });
      });
    });
  }

  deleteProfile() {
    this.apiService.deleteProfile(this.profileId).subscribe((res: any) => {
      this.router.navigate(['/dashboard']);
    });
  }
}

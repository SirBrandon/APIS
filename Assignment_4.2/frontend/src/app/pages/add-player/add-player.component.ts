import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  jsonObject: {} = {}

  constructor(private webReqService: WebRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  createPlayer(payload: string[]) {
    this.jsonObject = {
      "name": payload[0],
      "rushingYards": payload[1],
      "touchdownsThrown": payload[2],
      "sacks": payload[3],
      "madeFieldGoals": payload[4],
      "missedFieldGoals": payload[5],
      "catchesMade": payload[6]
    }
    this.webReqService.createPlayer('api/sports', this.jsonObject).subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(['/'])
  }
}

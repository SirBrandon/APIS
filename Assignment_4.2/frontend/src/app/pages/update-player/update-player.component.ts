import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  jsonObject: {} = {};
  names: string = "";
  players = new Map();
  selected: boolean = false;
  playerName: string = "";

  constructor(private webReqService: WebRequestService, private router: Router) { }

  ngOnInit(): void {
    this.webReqService.getPlayers('api/sports').subscribe((response: any) => {
      response.data.forEach((element: any) => {
        this.players.set(element.name, element._id);
      });
    });
  }

  updatePlayer(payload: string[]) {
    this.jsonObject = {
      "name": payload[0],
      "rushingYards": payload[1],
      "touchdownsThrown": payload[2],
      "sacks": payload[3],
      "madeFieldGoals": payload[4],
      "missedFieldGoals": payload[5],
      "catchesMade": payload[6]
    }
    this.webReqService.updatePlayer(`api/sports/${this.players.get(this.playerName)}`, this.jsonObject).subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(['/']);
  }

  switchView(player: string) {
    this.selected = true;
    this.playerName = player;
  }
}

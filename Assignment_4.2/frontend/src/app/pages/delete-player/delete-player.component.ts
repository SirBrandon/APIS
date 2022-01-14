import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.scss']
})
export class DeletePlayerComponent implements OnInit {

  players = new Map();
  selectedPlayer: string = "Select a player";

  constructor(private webReqService: WebRequestService, private router: Router) { }

  ngOnInit(): void {
    this.webReqService.getPlayers('api/sports').subscribe((response: any) => {
      response.data.forEach((element: any) => {
        this.players.set(element.name, element._id);
      });
    });
  }

  setPlayer(player: string) {
    this.selectedPlayer = player;
  }

  deletePlayer() {
    this.webReqService.deletePlayer(`api/sports/${this.players.get(this.selectedPlayer)}`).subscribe((result: any) => {
      console.log(result);
    })
    this.router.navigate(['/']);
  }
}

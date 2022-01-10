import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-football-view',
  templateUrl: './football-view.component.html',
  styleUrls: ['./football-view.component.scss']
})
export class FootballViewComponent implements OnInit {
  displayText: string = "Some Text";
  constructor(private webReqService: WebRequestService) { }

  ngOnInit(): void {
  }
  
  postMostSacksResults(): void {
    this.webReqService.getMostSacks('api/sports/mostSacks').subscribe((response: any) => {
      this.displayText = response.Player;
    });
  }

  postMostRushingYardsResults(): void {
    this.webReqService.getMostSacks('api/sports/mostRushingYards').subscribe((response: any) => {
      this.displayText = response.Player;
    });
  }

  postMostTouchdownsResults(): void {
    this.webReqService.getMostSacks('api/sports/mostTouchdowns').subscribe((response: any) => {
      this.displayText = response.Player;
    });
  }
  
  postLeastRushingYardsResults(): void {
    this.webReqService.getMostSacks('api/sports/leastRushingYards').subscribe((response: any) => {
      this.displayText = response.Player;
    });
  }

  postFieldGoalsAscendingResults(): void {
    this.webReqService.getMostSacks('api/sports/fieldGoalsAscending').subscribe((response: any) => {
      this.displayText = "";
      response.Player.forEach((element: { name: string; }) => {
        this.displayText += element.name + ", ";
      });
      this.displayText = this.displayText.substring(0, this.displayText.length - 2);
    });
  }
}

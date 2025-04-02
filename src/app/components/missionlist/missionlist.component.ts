import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe(data => {
      this.missions = data;
    });
  }

  filterByYear(year: string): void {
    if (!year.trim()) {
      this.spacexService.getAllLaunches().subscribe(data => {
        this.missions = data;
      });
    } else {
      this.spacexService.getLaunchesByYear(year).subscribe(data => {
        this.missions = data;
      });
    }
  }
}



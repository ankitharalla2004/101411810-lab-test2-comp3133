import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) {}

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flight_number'));
    this.spacexService.getLaunchByFlightNumber(flightNumber).subscribe(data => {
      this.mission = data;
    });
  }
}


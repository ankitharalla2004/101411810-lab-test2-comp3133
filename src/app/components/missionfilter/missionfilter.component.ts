import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent {
  @Output() yearChanged = new EventEmitter<string>();

  onYearChange(year: string) {
    this.yearChanged.emit(year);
  }
}


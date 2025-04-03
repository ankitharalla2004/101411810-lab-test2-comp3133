import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class MissionfilterComponent {
  @Output() yearChanged = new EventEmitter<string>();

  years: number[] = [
    2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015,
    2016, 2017, 2018, 2019, 2020
  ];
  onYearInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const typedYear = input.value;
    console.log('Typed year:', typedYear); 
    this.yearChanged.emit(typedYear);
  }
  
  onYearSelect(event: MatSelectChange): void {
    const selectedYear = event.value;
    console.log('Selected year:', selectedYear); 
    this.yearChanged.emit(selectedYear);
  }
  
}

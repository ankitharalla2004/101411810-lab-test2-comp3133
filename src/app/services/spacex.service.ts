import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiURL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiURL);
  }

  getLaunchesByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiURL}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiURL}/${flightNumber}`);
  }
}

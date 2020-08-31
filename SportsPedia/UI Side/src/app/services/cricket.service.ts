import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CricketService {
  baseurl = environment.baseUrl
  constructor(public http: HttpClient) { }

  get_cricket_details(): Observable<any> {
    let url = `${this.baseurl}cricket`;
    return this.http.get(url);
  }

  get_cricket_international_team_details(): Observable<any>{
    let url = `${this.baseurl}cricket/international-teams`
    return this.http.get(url);
  }

  get_cricket_ipl_teams_details(): Observable<any>{
    let url = `${this.baseurl}cricket/ipl-teams`;
    return this.http.get(url);
  }

  get_players_of_a_team(teamId): Observable<any>{
    let url = `${this.baseurl}cricket/players/${teamId}`
    return this.http.get(url);
  }
}

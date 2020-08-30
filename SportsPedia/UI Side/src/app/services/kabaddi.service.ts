import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KabaddiService {
  baseurl = environment.baseUrl
  constructor(public http: HttpClient) { }

  get_kabaddi_details(): Observable<any> {
    let url = `${this.baseurl}kabaddi`;
    return this.http.get(url);
  }
}

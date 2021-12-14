import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreasuryService {

  constructor(private http: HttpClient) { }

  getUSD(): Observable<any> {
    const data = this.http.get('https://www.econdb.com/api/sources/');
    return data;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanyeService {

  constructor(private http: HttpClient) { }

  getYe(): Observable<any> {
    const data = this.http.get('https://api.kanye.rest');
    return data;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconService {
  constructor(private http: HttpClient) { }

  getIcon(clima: string): Observable<Blob> {
    const url = `https://openweathermap.org/img/wn/${clima}@2x.png`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
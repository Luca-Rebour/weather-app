import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apyKey: string = environment.apiKey;
  url: string = environment.apiUrl;
  
  constructor(private http:HttpClient) {}
    getFromUserSelection(city: string) {
      return this.http.get(`${this.url}${city}&appid=${this.apyKey}`)
   }
}

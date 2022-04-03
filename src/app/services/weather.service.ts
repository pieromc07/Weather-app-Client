import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // _URL = "https://api.openweathermap.org/data/2.5/forecast?"
  _URL = "http://localhost:5500/api/v1/weather/test"

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * getForLocation
   */
  public getForLocation(lat: String, lon: String){



    return this.httpClient.get
    // return this.httpClient.post
  }



}

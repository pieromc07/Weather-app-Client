import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  _URL = "https://api.openweathermap.org/data/2.5/forecast?"
  _KEY = "20fba37682e818119926064af3408f0f"


  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * getForLocation
   */
  public getForLocation(lat: String, lon: String){
    
    let newUrl = this._URL + "lat=" + lat + "&lon=" + lon +"&units=metric"+ "&appid="+ this._KEY 

    return this.httpClient.get(newUrl)
  }



}

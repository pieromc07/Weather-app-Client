import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY: string = '20fba37682e818119926064af3408f0f'
  URI: string = ''

  constructor(private httpClient: HttpClient) { 

    this.URI = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.API_KEY}&q=`

  }

  getWeather(cityName: string, countryCode: string){

    return this.httpClient.get(`${this.URI} ${cityName},${countryCode}`)

  }

}

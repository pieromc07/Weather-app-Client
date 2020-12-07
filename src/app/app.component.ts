import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather-app';
  constructor(public weatherService: WeatherService) {
    
  }
  ngOnInit(){
    // this.getWearher()

  }


  getWearher(){
    this.weatherService.getWeather('Lima', 'pe')
      .subscribe(
        res => console.log(res),
        err => console.log(err)
        
        
      )
    

    
  }




}

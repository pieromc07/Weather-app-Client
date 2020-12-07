import { Component, OnInit } from '@angular/core';
// import {WeatherService} from '../services/weather.service';
@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {

  Coord = {
    log: "",
    lat: ""
  };

  constructor() { }

  ngOnInit(): void {
    // this.geolocation()
  }

  public geolocation(): any {
    const location = navigator.geolocation


    const getLocation = (position: any) => {
      this.Coord.lat = position.coords.latitude;
      this.Coord.log = position.coords.longitude;
      console.log("lat: " + this.Coord.lat);
      console.log("log: " + this.Coord.log);
      
      
    }

    const err = (err: any) => {
      alert("Sorry, no position available.");
      console.log(err);
    }
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    }

    location.watchPosition(getLocation, err, options)
  }

}

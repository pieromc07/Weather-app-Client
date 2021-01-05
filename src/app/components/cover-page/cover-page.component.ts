import { Component, OnInit } from '@angular/core';
import { BridgedatesService } from './../../services/bridgedates.service';
import { WeatherService } from './../../services/weather.service';
@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {

  Coord = {
    log: '',
    lat: ''
  };

  weather =
    {
      cityName: '',
      cityContry: '',
      data: [
        {
          temp: '',
          temp_min: '',
          temp_max: '',
          pressure: '',
          humidity: '',
          windSeed: '',
          windDeg: '',
          visibility: '',
          weatherMain: {
            id: '',
            main: '',
            description: '',
          }
        },
        {
          temp: '',
          temp_min: '',
          temp_max: '',
          pressure: '',
          humidity: '',
          windSeed: '',
          windDeg: '',
          visibility: '',
          weatherMain: {
            id: '',
            main: '',
            description: '',
          }
        },
        {
          temp: '',
          temp_min: '',
          temp_max: '',
          pressure: '',
          humidity: '',
          windSeed: '',
          windDeg: '',
          visibility: '',
          weatherMain: {
            id: '',
            main: '',
            description: '',
          }
        },
        {
          temp: '',
          temp_min: '',
          temp_max: '',
          pressure: '',
          humidity: '',
          windSeed: '',
          windDeg: '',
          visibility: '',
          weatherMain: {
            id: '',
            main: '',
            description: '',
          }
        },
        {
          temp: '',
          temp_min: '',
          temp_max: '',
          pressure: '',
          humidity: '',
          windSeed: '',
          windDeg: '',
          visibility: '',
          weatherMain: {
            id: '',
            main: '',
            description: '',
          }
        },
      ]
    }

  searchLocation = {

    location: ''

  }

  constructor(private weatherService: WeatherService, private bridgedates: BridgedatesService) {



  }




  ngOnInit(): void {
    // this.geolocation()
  }



  public search() {


    alert(this.searchLocation.location)

  }

  public exit() {
    const element = document.getElementById("search-content");
    element?.classList.remove("active");
    element?.classList.add("exit");
  }
  public open() {
    const element = document.getElementById("search-content");
    element?.classList.remove("exit");
    element?.classList.add("active");


  }



  public getGeoLocation() {
    const location = navigator.geolocation
    const getLocation = (position: any) => {
      this.Coord.lat = position.coords.latitude
      this.Coord.log = position.coords.longitude
      this.weatherService.getForLocation(this.Coord.lat, this.Coord.log)
        .subscribe((res : any) => {

          this.weather.cityName = res.city.name
          this.weather.cityContry = res.city.country
          // Today
          this.weather.data[0].temp = res.list[0].main.temp;
          this.weather.data[0].temp_max = res.list[0].main.temp_max;
          this.weather.data[0].temp_min = res.list[0].main.temp_min;
          this.weather.data[0].pressure = res.list[0].main.pressure;
          this.weather.data[0].visibility = res.list[0].visibility
          this.weather.data[0].humidity = res.list[0].main.humidity;
          this.weather.data[0].windSeed = res.list[0].wind.speed;
          this.weather.data[0].windDeg = res.list[0].wind.deg
          this.weather.data[0].weatherMain.id = res.list[0].weather[0].id;
          this.weather.data[0].weatherMain.main = res.list[0].weather[0].main;
          this.weather.data[0].weatherMain.description = res.list[0].weather[0].description;
          // Tomorrow
          this.weather.data[1].temp = res.list[7].main.temp;
          this.weather.data[1].temp_max = res.list[7].main.temp_max;
          this.weather.data[1].temp_min = res.list[7].main.temp_min;
          this.weather.data[1].pressure = res.list[7].main.pressure;
          this.weather.data[1].visibility = res.list[7].visibility
          this.weather.data[1].humidity = res.list[7].main.humidity;
          this.weather.data[1].windSeed = res.list[7].wind.speed;
          this.weather.data[1].windDeg = res.list[7].wind.deg
          this.weather.data[1].weatherMain.id = res.list[7].weather[0].id;
          this.weather.data[1].weatherMain.main = res.list[7].weather[0].main;
          this.weather.data[1].weatherMain.description = res.list[7].weather[0].description;
          //  after tomorrow
          this.weather.data[2].temp = res.list[14].main.temp;
          this.weather.data[2].temp_max = res.list[14].main.temp_max;
          this.weather.data[2].temp_min = res.list[14].main.temp_min;
          this.weather.data[2].pressure = res.list[14].main.pressure;
          this.weather.data[2].visibility = res.list[14].visibility
          this.weather.data[2].humidity = res.list[14].main.humidity;
          this.weather.data[2].windSeed = res.list[14].wind.speed;
          this.weather.data[2].windDeg = res.list[14].wind.deg
          this.weather.data[2].weatherMain.id = res.list[14].weather[0].id;
          this.weather.data[2].weatherMain.main = res.list[14].weather[0].main;
          this.weather.data[2].weatherMain.description = res.list[14].weather[0].description;
          // ss tomorrow
          this.weather.data[3].temp = res.list[22].main.temp;
          this.weather.data[3].temp_max = res.list[22].main.temp_max;
          this.weather.data[3].temp_min = res.list[22].main.temp_min;
          this.weather.data[3].pressure = res.list[22].main.pressure;
          this.weather.data[3].visibility = res.list[22].visibility
          this.weather.data[3].humidity = res.list[22].main.humidity;
          this.weather.data[3].windSeed = res.list[22].wind.speed;
          this.weather.data[3].windDeg = res.list[22].wind.deg
          this.weather.data[3].weatherMain.id = res.list[22].weather[0].id;
          this.weather.data[3].weatherMain.main = res.list[22].weather[0].main;
          this.weather.data[3].weatherMain.description = res.list[22].weather[0].description;
          //ff 
          this.weather.data[4].temp = res.list[30].main.temp;
          this.weather.data[4].temp_max = res.list[30].main.temp_max;
          this.weather.data[4].temp_min = res.list[30].main.temp_min;
          this.weather.data[4].pressure = res.list[30].main.pressure;
          this.weather.data[4].visibility = res.list[30].visibility
          this.weather.data[4].humidity = res.list[30].main.humidity;
          this.weather.data[4].windSeed = res.list[30].wind.speed;
          this.weather.data[4].windDeg = res.list[30].wind.deg
          this.weather.data[4].weatherMain.id = res.list[30].weather[0].id;
          this.weather.data[4].weatherMain.main = res.list[30].weather[0].main;
          this.weather.data[4].weatherMain.description = res.list[30].weather[0].description;
        });
      // console.log(this.weather);
      this.bridgedates.DataTigger.emit(this.weather)
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

    location.getCurrentPosition(getLocation, err)
  }

  public geolocation() {

    this.getGeoLocation()

  }

}

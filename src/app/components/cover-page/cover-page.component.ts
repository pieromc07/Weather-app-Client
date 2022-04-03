import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BridgedatesService } from './../../services/bridgedates.service';
import { WeatherService } from './../../services/weather.service';
import { Weather } from './../../models/Weather'
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
      date: '',
      data: [
        {
          temp: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: '',
          humidity: '',
          windSeed: '',
          windDeg: '',
          visibility: '',
          date: '',
          icon: "",
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
          date: '',
          icon: "",
          weatherMain: {
            id: '',
            main: '',
            description: ''
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
          date: '',
          icon: '',
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
          date: '',
          icon: '',
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
          date: '',
          icon: '',
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


  Tiempo = '';

  ngOnInit(): void {
    // this.geolocation()
    console.log(this.Tiempo)
  }



  ImgWeather = ''



  getDay(day: number): any {
    switch (day) {

      case 0:
        return 'Sun'
        break;
      case 1:
        return 'Mon'
        break;
      case 2:
        return 'Tues'
        break;
      case 3:
        return 'Wed'
        break;
      case 4:
        return 'Thurs'
        break;
      case 5:
        return 'Fri'
        break;
      case 6:
        return 'Sat'
      default:
        break;
    }
  }

  getMonth(month: number): any {

    switch (month) {
      case 0:
        return 'Jan'
        break;
      case 1:
        return 'Feb'
        break;
      case 2:
        return 'Mar'
        break;
      case 3:
        return 'Apr'
        break;
      case 4:
        return 'May'
        break;
      case 5:
        return 'Jun'
        break;
      case 6:
        return 'Jul'
        break;
      case 7:
        return 'Aug'
        break;
      case 8:
        return 'Sep'
        break;
      case 9:
        return 'Oct'
        break;
      case 10:
        return 'Nov'
        break;
      case 11:
        return 'Dec'
        break;
    }

  }

  evalueteDate(date: any, i: number) {

    let newDate = new Date(date)
    let day = newDate.getDay();
    let WeekDay = newDate.getDate()
    let month = newDate.getMonth()
    if (i == 1) {
      this.weather.data[i].date = 'Tomorrow'
    } else {
      this.weather.data[i].date = this.getDay(day) + ', ' + WeekDay + ' ' + this.getMonth(month)
    }

  }

  evaluateInt(temp: any, temp_max: any, temp_min: any, i: number) {
    this.weather.data[i].temp = parseInt(temp, 10)
    this.weather.data[i].temp_max = parseInt(temp_max, 10)
    this.weather.data[i].temp_min = parseInt(temp_min, 10)
  }

  evaluateImage(id: any, i: number) {
    if (id >= '200' && id < '300') {
      this.ImgWeather = "'./../../../assets/img/200.png"
    } else if (id >= '300' && id < '500') {
      this.ImgWeather = "'./../../../assets/img/300.png"
    } else if (id >= '500' && id < '511') {
      this.ImgWeather = "'./../../../assets/img/500.png"
    } else if (id >= '511' && id < '520') {
      this.ImgWeather = "'./../../../assets/img/500-2.png"
    } else if (id >= '520' && id < '600') {
      this.ImgWeather = "'./../../../assets/img/500-3.png"
    } else if (id >= '600' && id < '700') {
      this.ImgWeather = "'./../../../assets/img/600.png"
    } else if (id >= '700' && id < '800') {
      this.ImgWeather = "'./../../../assets/img/700.png"
    } else if (id == '800') {
      this.ImgWeather = "'./../../../assets/img/800.png"
    } else if (id >= '801' && id < '803') {
      this.ImgWeather = "'./../../../assets/img/800-2.png"
    } else if (id >= '803' && id <= '804') {
      this.ImgWeather = "'./../../../assets/img/800-3.png"
    } else {
      this.ImgWeather = "./../../../assets/img/200.png"
    }


    switch (i) {
      case 0:
        this.weather.data[i].icon = this.ImgWeather
        break;
      case 1:
        this.weather.data[i].icon = this.ImgWeather
        break;
      case 2:
        this.weather.data[i].icon = this.ImgWeather
        break;
      case 3:
        this.weather.data[i].icon = this.ImgWeather
        break;
      case 4:
        this.weather.data[i].icon = this.ImgWeather
        break;
    }

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
    const button = document.getElementById("locationBtn");
    button?.classList.add("click");
    const getLocation = (position: any) => {
      this.Coord.lat = position.coords.latitude
      this.Coord.log = position.coords.longitude
      this.weatherService.getForLocation(this.Coord.lat, this.Coord.log)
        .subscribe((res: any) => {

          this.weather.cityName = res.city.name
          this.weather.cityContry = res.city.country
          this.weather.date = res.list[0].dt_txt
          // Today
          this.weather.data[0].temp = res.list[0].main.temp;
          this.weather.data[0].temp_max = res.list[0].main.temp_max;
          this.weather.data[0].temp_min = res.list[0].main.temp_min;
          this.weather.data[0].pressure = res.list[0].main.pressure;
          this.weather.data[0].visibility = res.list[0].visibility
          this.weather.data[0].date = res.list[0].dt_txt
          this.weather.data[0].humidity = res.list[0].main.humidity;
          this.weather.data[0].windSeed = res.list[0].wind.speed;
          this.weather.data[0].windDeg = res.list[0].wind.deg
          this.weather.data[0].weatherMain.id = res.list[0].weather[0].id;
          this.weather.data[0].weatherMain.main = res.list[0].weather[0].main;
          this.weather.data[0].weatherMain.description = res.list[0].weather[0].description;
          // Tomorrow
          this.weather.data[1].temp = res.list[9].main.temp;
          this.weather.data[1].temp_max = res.list[9].main.temp_max;
          this.weather.data[1].temp_min = res.list[9].main.temp_min;
          this.weather.data[1].pressure = res.list[9].main.pressure;
          this.weather.data[1].visibility = res.list[9].visibility
          this.weather.data[1].date = res.list[9].dt_txt
          this.weather.data[1].humidity = res.list[9].main.humidity;
          this.weather.data[1].windSeed = res.list[9].wind.speed;
          this.weather.data[1].windDeg = res.list[9].wind.deg
          this.weather.data[1].weatherMain.id = res.list[9].weather[0].id;
          this.weather.data[1].weatherMain.main = res.list[9].weather[0].main;
          this.weather.data[1].weatherMain.description = res.list[9].weather[0].description;
          //  after tomorrow
          this.weather.data[2].temp = res.list[16].main.temp;
          this.weather.data[2].temp_max = res.list[16].main.temp_max;
          this.weather.data[2].temp_min = res.list[16].main.temp_min;
          this.weather.data[2].pressure = res.list[16].main.pressure;
          this.weather.data[2].visibility = res.list[16].visibility
          this.weather.data[2].date = res.list[16].dt_txt
          this.weather.data[2].humidity = res.list[16].main.humidity;
          this.weather.data[2].windSeed = res.list[16].wind.speed;
          this.weather.data[2].windDeg = res.list[16].wind.deg
          this.weather.data[2].weatherMain.id = res.list[16].weather[0].id;
          this.weather.data[2].weatherMain.main = res.list[16].weather[0].main;
          this.weather.data[2].weatherMain.description = res.list[16].weather[0].description;
          // ss tomorrow
          this.weather.data[3].temp = res.list[24].main.temp;
          this.weather.data[3].temp_max = res.list[24].main.temp_max;
          this.weather.data[3].temp_min = res.list[24].main.temp_min;
          this.weather.data[3].pressure = res.list[24].main.pressure;
          this.weather.data[3].visibility = res.list[24].visibility
          this.weather.data[3].date = res.list[24].dt_txt
          this.weather.data[3].humidity = res.list[24].main.humidity;
          this.weather.data[3].windSeed = res.list[24].wind.speed;
          this.weather.data[3].windDeg = res.list[24].wind.deg
          this.weather.data[3].weatherMain.id = res.list[24].weather[0].id;
          this.weather.data[3].weatherMain.main = res.list[24].weather[0].main;
          this.weather.data[3].weatherMain.description = res.list[24].weather[0].description;
          //ff
          this.weather.data[4].temp = res.list[32].main.temp;
          this.weather.data[4].temp_max = res.list[32].main.temp_max;
          this.weather.data[4].temp_min = res.list[32].main.temp_min;
          this.weather.data[4].pressure = res.list[32].main.pressure;
          this.weather.data[4].visibility = res.list[32].visibility
          this.weather.data[4].date = res.list[32].dt_txt
          this.weather.data[4].humidity = res.list[32].main.humidity;
          this.weather.data[4].windSeed = res.list[32].wind.speed;
          this.weather.data[4].windDeg = res.list[32].wind.deg
          this.weather.data[4].weatherMain.id = res.list[32].weather[0].id;
          this.weather.data[4].weatherMain.main = res.list[32].weather[0].main;
          this.weather.data[4].weatherMain.description = res.list[32].weather[0].description;
          for (let i = 0; i < 5; i++) {
            this.evaluateImage(this.weather.data[i].weatherMain.id, i);
            this.evaluateInt(this.weather.data[i].temp, this.weather.data[i].temp_max, this.weather.data[i].temp_min, i)
            this.evalueteDate(this.weather.data[i].date, i)
          }
        });
      button?.classList.remove("click");
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
    this.Tiempo = 'true'
  }

  public geolocation() {

    this.getGeoLocation()

  }

}

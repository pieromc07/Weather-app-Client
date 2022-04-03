import { Component, OnInit } from '@angular/core';
import { BridgedatesService } from './../../services/bridgedates.service';
import { Weather } from './../../models/Weather'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private bridgedates: BridgedatesService) { }
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
          visibility: 0,
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

  ngOnInit(): void {

    this.bridgedates.DataTigger.subscribe((data: any) => {

      this.weather = data
      console.log(this.weather);

    })
  }

}

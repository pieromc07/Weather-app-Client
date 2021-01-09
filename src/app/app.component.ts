import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
// import {CoverPageComponent} from "./components/cover-page/cover-page.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ngxSpinnerService: NgxSpinnerService) {
    
  }
  ngOnInit(){
    
    // /** spinner starts on init */
    // this.ngxSpinnerService.show();
 
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   // this.coverPage.geolocation()
    //   console.log("Hola");
    //   this.ngxSpinnerService.hide();
    // }, 10000);
  }

}

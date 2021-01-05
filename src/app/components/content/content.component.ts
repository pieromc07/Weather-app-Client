import { Component, OnInit } from '@angular/core';
import { BridgedatesService } from './../../services/bridgedates.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private bridgedates: BridgedatesService) { }

  ngOnInit(): void {

    this.bridgedates.DataTigger.subscribe((data: any) =>{
      console.log(data);
      
    })
  }

}

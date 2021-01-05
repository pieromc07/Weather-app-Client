import { Injectable, Output , EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BridgedatesService {

@Output() DataTigger: EventEmitter<any> = new EventEmitter()
  constructor() { }
}

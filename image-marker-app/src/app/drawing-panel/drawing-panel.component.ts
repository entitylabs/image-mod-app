import { Component, OnInit } from '@angular/core';
import {Coordinates} from './model/line.cooridnates';

@Component({
  selector: 'app-drawing-panel',
  templateUrl: './drawing-panel.component.html',
  styleUrls: ['./drawing-panel.component.css']
})
export class DrawingPanelComponent implements OnInit {

  
  coordinates:Coordinates[]=[];
  isSelectionValid:boolean=false;

  constructor() { }

  ngOnInit(): void {

    // let coordinateOne = new Coordinates();
    // coordinateOne.xCoordinate=10;
    // coordinateOne.yCoordinate=10;

    // this.coordinates.push(coordinateOne);


    // let coordinateTwo = new Coordinates();
    // coordinateTwo.xCoordinate=10;
    // coordinateTwo.yCoordinate=10;

    // this.coordinates.push(coordinateOne);
  }


  onMouseCLick(event:MouseEvent){
    
    console.log(event);
    let coordinate:Coordinates = new Coordinates();
    coordinate.xCoordinate=event.clientX;
    coordinate.yCoordinate=event.clientY;
    this.coordinates.push(coordinate);

    if(this.coordinates.length>0){
      this.isSelectionValid=true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Coordinates } from './model/line.cooridnates';

@Component({
  selector: 'app-drawing-panel',
  templateUrl: './drawing-panel.component.html',
  styleUrls: ['./drawing-panel.component.css']
})
export class DrawingPanelComponent implements OnInit {


  coordinates: Coordinates[] = [];
  isSelectionValid: boolean = false;
  isMousePressed: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  onMouseCLick(event: MouseEvent) {

    console.log(event);
    let coordinate: Coordinates = new Coordinates();
    coordinate.xCoordinate = event.clientX;
    coordinate.yCoordinate = event.clientY;
    this.coordinates.push(coordinate);

    if (this.coordinates.length > 0) {
      this.isSelectionValid = true;
    }
  }

  onMousePress(event: MouseEvent) {

    this.isMousePressed = true;
  }

  onMouseRelease(event: MouseEvent) {

    this.isMousePressed = false;

  }

  onMouseMove(event: MouseEvent) {

    if (this.isMousePressed) {
      let coordinate: Coordinates = new Coordinates();
      coordinate.xCoordinate = event.clientX;
      coordinate.yCoordinate = event.clientY;
      this.coordinates.push(coordinate);

      if (this.coordinates.length > 0) {
        this.isSelectionValid = true;
      }

    }
  }

}

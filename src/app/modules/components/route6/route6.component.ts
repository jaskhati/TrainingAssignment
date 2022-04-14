import { Component } from '@angular/core';
import { CONTAINERS } from 'src/app/constants/constants';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss'],
})
export class Route6Component {
  containers: Array<number> = CONTAINERS;

  constructor() {}

  add() {
    this.containers.push(this.containers.length + 1);
  }

  onScrollDown(event: any) {
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
  }

  openAlert(index: number) {
    window.alert(`Button in ${index + 1}th div is clicked`);
  }
}

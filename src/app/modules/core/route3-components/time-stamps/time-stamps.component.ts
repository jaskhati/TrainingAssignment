import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.scss'],
})
export class TimeStampsComponent {
  @Input() timeStamps!: Array<any>;

  constructor() {}
}

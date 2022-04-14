import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-reports',
  templateUrl: './control-reports.component.html',
  styleUrls: ['./control-reports.component.scss'],
})
export class ControlReportsComponent implements OnInit {
  @Input() pauseCount!: number;
  @Input() startCount!: number;

  constructor() {}

  ngOnInit(): void {}
}

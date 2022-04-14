import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerControlComponent } from '../../core/route3-components/timer-control/timer-control.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss'],
})
export class Route3Component implements OnInit {
  timeUnit: number = 0;
  timer: any;
  isPaused: boolean = false;
  timeStamps: Array<any> = [];
  pauseCount: number = 0;
  startCount: number = 0;
  @ViewChild(TimerControlComponent) child!: TimerControlComponent;

  constructor() {}

  ngOnInit() {}

  toogleTimer(data: any) {
    this.timeStamps.push({
      time: new Date(),
      state: data.isPaused ? 'Paused' : 'Started',
    });
    data.isPaused ? this.pauseCount++ : this.startCount++;
    this.isPaused = data.isPaused;
    if (!data.isPaused && data.value && !this.timer) {
      this.timeUnit = parseInt(data.value);
      this.timer = window.setInterval(() => {
        if (!this.isPaused) {
          this.timeUnit = this.timeUnit - 1;
          if (this.timeUnit === 0) {
            clearInterval(this.timer);
            this.timer = null;
            this.child.resetData();
          }
        }
      }, 1000);
    }
  }

  resetTimer() {
    this.timeStamps.push({
      time: new Date(),
      state: 'Reset',
    });
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.timeUnit = 0;
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route3Component } from './route3.component';
import { Route3RoutingModule } from './route3-routing.module';
import { CountDownTimerComponent } from '../../core/route3-components/count-down-timer/count-down-timer.component';
import { TimerControlComponent } from '../../core/route3-components/timer-control/timer-control.component';
import { TimeStampsComponent } from '../../core/route3-components/time-stamps/time-stamps.component';
import { ControlReportsComponent } from '../../core/route3-components/control-reports/control-reports.component';

@NgModule({
  declarations: [
    Route3Component,
    CountDownTimerComponent,
    TimerControlComponent,
    TimeStampsComponent,
    ControlReportsComponent,
  ],
  imports: [CommonModule, Route3RoutingModule],
})
export class Route3Module {}

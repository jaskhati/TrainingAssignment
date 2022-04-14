import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route4Component } from './route4.component';
import { CountDownComponent } from '../../core/route4-components/count-down/count-down.component';
import { ControlsComponent } from '../../core/route4-components/controls/controls.component';
import { LogsComponent } from '../../core/route4-components/logs/logs.component';
import { ReportsComponent } from '../../core/route4-components/reports/reports.component';
import { Route4RoutingModule } from './route4-routing.module';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    Route4Component,
    CountDownComponent,
    ControlsComponent,
    LogsComponent,
    ReportsComponent,
  ],
  imports: [CommonModule, Route4RoutingModule],
  providers: [DataService],
})
export class Route4Module {}

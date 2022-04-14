import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './route1.component';
import { Route1RoutingModule } from './route1-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [Route1Component],
  imports: [CommonModule, Route1RoutingModule, NgbModule],
})
export class Route1Module {}

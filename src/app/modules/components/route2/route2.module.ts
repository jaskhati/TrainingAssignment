import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2.component';
import { Route2RoutingModule } from './route2-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [Route2Component],
  imports: [CommonModule, Route2RoutingModule, NgbModule],
})
export class Route2Module {}
